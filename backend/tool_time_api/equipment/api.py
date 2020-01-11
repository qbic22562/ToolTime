from django.http import Http404
from rest_framework import viewsets, views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import ToolSerializer, RentalSerializer
from .models import Tool, Rental
from .exceptions import NotEnoughTools
from .scheduler import scheduler


class ToolsListAPI(views.APIView):
    permission_classes = [IsAuthenticatedOrReadOnly, ]

    def get(self, request, format=None):
        tools = Tool.objects.all()
        print(tools)
        serializer = ToolSerializer(tools, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ToolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ToolsDetailAPI(views.APIView):
    def get_object(self, pk):
        try:
            return Tool.objects.get(pk=pk)
        except Tool.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        tool = self.get_object(pk)
        serializer = ToolSerializer(tool)
        return Response(serializer.data)

    def delete(self, request, format=None):
        Tool.objects.filter(id=request.data['id']).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, format=None):
        serializer = ToolSerializer(data=request.data)
        if serializer.is_valid():
            obj = Tool.objects.get(id=request.data['id'])
            obj.name = serializer.data['name']
            obj.amount = serializer.data['amount']
            obj.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalsListAPI(views.APIView):
    permission_classes = [IsAuthenticatedOrReadOnly, ]

    def get(self, request, format=None):
        rentals = Rental.objects.all()
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalSerializer(data=request.data)

        if(not check_dates(request)):
           return Response({"message": "You cannot make reservation in the past."}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            try:
                decrement_tool_amount(request)
                increment_tool_amount(request)
            except NotEnoughTools:
                return Response({"message": "Not enough tools for another rental."}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalsDetailAPI(views.APIView):
    def get_rentals_by_tool_id(self, pk):
        try:
            return Rental.objects.filter(tool=pk)
        except Rental.DoesNotExist:
            return Http404

    def get(self, request, pk, format=None):
        rentals = self.get_rentals_by_tool_id(pk)
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)



def check_dates(request):
    if(request.data['since'] >= request.data['until']):
        return False
    return True

def decrement_tool_amount(request):
    obj = Tool.objects.get(id=request.data['tool'])
    obj.decrement_amount()
    obj.save()

def increment_tool_amount(request):
    obj = Tool.objects.get(id=request.data['tool'])
    until_date = request.data['until']
    scheduler.add_job(increment, trigger='date', run_date=until_date, args=[obj])

def increment(obj):
    obj.increment_amount()
    obj.save()
    

    


