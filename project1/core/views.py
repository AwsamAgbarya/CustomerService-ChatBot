from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import questionSerializer
from .models import ChatMessage
from django.shortcuts import render
from pymongo import MongoClient

#Connecting the database
# connection_string = 'mongodb+srv://meow:123@chatbot.g6qvdwt.mongodb.net/test'
# client = pymongo.MongoClient('connection_string')
#db = client['db_name']


def front(request):
    context = { }
    return render(request, "index.html", context)
    
@api_view(['POST'])
def question(request):
    # Decoding the POST object data through questionSerializer and printing it for debugging purposes.
    serializer = questionSerializer(data=request.data)
    print(request.data)

    # In the case that there is valid data
    if serializer.is_valid():
        # Used to store in the database, temporarily disabled for debugging
        # serializer.save()

        # We compute a valid answer here
        # print(serializer.data)
        reply = "ong you trippin fr fr"

        # Returning OK response including a reply
        return Response(reply,status=status.HTTP_201_CREATED)
    # Returning bad request response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
