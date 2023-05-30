from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import questionSerializer
from .models import ChatMessage
from django.shortcuts import render
from pymongo import MongoClient
from django.http import JsonResponse

#Connecting the database
# connection_string = 'mongodb+srv://meow:123@chatbot.g6qvdwt.mongodb.net/test'
# client = pymongo.MongoClient('connection_string')
#db = client['db_name']

def database_list(request):
    # Connect to the MongoDB server
    client = MongoClient('mongodb://superuser:superpassword@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=customer')
    # Retrieve the list of databases
    database_names = client.list_database_names()
    # Close the MongoDB connection
    client.close()
    # Return the database list as JSON response
    return JsonResponse({'databases': database_names})

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
        response_id = serializer.data['id']+1

        # Returning OK response including a reply
        return Response(reply,status=status.HTTP_201_CREATED)
    # Returning bad request response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
