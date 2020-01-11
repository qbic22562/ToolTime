from rest_framework import viewsets, views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import ToolSerializer, RentalSerializer
from .models import Tool, Rental


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


class RentalsAPI(views.APIView):
    permission_classes = [IsAuthenticatedOrReadOnly, ]

    def get(self, request, format=None):
        rentals = Rental.objects.all()
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

