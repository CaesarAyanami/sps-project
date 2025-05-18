from django.contrib import admin
from apps.paciente.models import *

admin.site.register(Doctor)
admin.site.register(Paciente)
admin.site.register(HistorialMedico)
admin.site.register(DocumentoMedico)
