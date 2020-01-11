from rest_framework import viewsets, views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import ToolSerializer, RentalSerializer
from .models import Tool, Rental
from .exceptions import NotEnoughTools
from .scheduler import scheduler


class ToolsAPI(views.APIView):
    permission_classes = [IsAuthenticatedOrReadOnly, ]

    def get(self, request, format=None):
        tools = Tool.objects.all()
        serializer = ToolSerializer(tools, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ToolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        Tool.objects.filter(id=request.data['id']).delete()
        return Response("Object deleted", status=status.HTTP_200_OK)

    def put(self, request, format=None):
        serializer = ToolSerializer(data=request.data)
        if serializer.is_valid():
            obj = Tool.objects.get(id=request.data['id'])
            obj.name = serializer.data['name']
            obj.amount = serializer.data['amount']
            obj.save()
            return Response("Update successfull", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalsAPI(views.APIView):
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
    

    


