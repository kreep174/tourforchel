from django.shortcuts import render
from .models import Tour

def tour(request):
    context = {}
    return render(request, 'tour/index.html', context)
