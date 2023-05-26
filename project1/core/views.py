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
# Create your views here.
@api_view(['POST'])
def question(request):
    # Decoding the POST object data through questionSerializer and printing it for debugging purposes.
    serializer = questionSerializer(data=request.data)

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

# @api_view(['GET', 'POST'])
# def note(request):

#     if request.method == 'GET':
#         note = Notes.objects.all()
#         serializer = NoteSerializer(note, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = NoteSerializer(data=request.data)
        
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# @api_view(['DELETE'])
# def note_detail(request, pk):
#     try:
#         note = Notes.objects.get(pk=pk)
#     except Notes.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         note.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
