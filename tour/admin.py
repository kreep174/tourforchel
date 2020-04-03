from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Tour


class TourAdmin(admin.ModelAdmin):
    list_display = ('name', 'pk', 'bg', 'get_image')
    list_display_links = ('name', 'pk', 'bg')
    search_fields = ('name', 'pk', 'bg')

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.bg.url} width="50" height="60"')

    get_image.short_description = "Изображение"


admin.site.register(Tour, TourAdmin)
