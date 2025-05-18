from django.db import models
from apps.base.models import BaseModel
from apps.users.models import User
from simple_history.models import HistoricalRecords


class Doctor(BaseModel):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    especialidad = models.CharField('Especialidad', max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = 'Doctor'
        verbose_name_plural = 'Doctores'

    def __str__(self):
        return self.usuario.name + ' ' + self.usuario.last_name

class Paciente(BaseModel):
    names       = models.CharField('Nombres', max_length=150, blank=True, null=True)
    last_names  = models.CharField('Apellidos', max_length=150, blank=True, null=True)
    cedula      = models.IntegerField('Cedula', unique=True)
    historical  = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by
    
    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        verbose_name = 'Paciente'
        verbose_name_plural = 'Pacientes'

    def __str__(self):
        return f'{self.names} {self.last_names}'
    
class HistorialMedico(BaseModel):
    paciente = models.ForeignKey(Paciente, related_name='historiales', on_delete=models.CASCADE)
    doctores = models.ManyToManyField(Doctor, related_name='historiale_atendidos')

    class Meta:
        verbose_name = 'Historial Medico'
        verbose_name_plural = 'Historiales Medicos'

    def __str__(self):
        return f'Historial de {self.paciente.names} {self.paciente.last_names}'

class DocumentoMedico(BaseModel):
    historial = models.ForeignKey(HistorialMedico, related_name='documentos', on_delete=models.CASCADE)
    nombre_archivo = models.CharField('Nombre del Archivo', max_length=150, blank=True, null=True)
    archivo = models.FileField('Archivo', upload_to='documentos_medicos/')

    class Meta:
        verbose_name = 'Documento Medico'
        verbose_name_plural = 'Documentos Medicos'
    def __str__(self):
        return f'Documento de {self.historial.paciente.names} {self.historial.paciente.last_names} - {self.nombre_archivo}'
    

    
