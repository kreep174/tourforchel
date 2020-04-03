from django import template
from tour.models import Tour

register = template.Library()
bgs = 0
@register.filter(name='retlink')
def retlink(value, arg):
    bgs = Tour.objects.filter(name=arg)
    for i in bgs:
        link = i.bg.url
    return link
