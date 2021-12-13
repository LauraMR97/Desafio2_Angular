export interface PersonasResponse {
  correo:        string;
  nombre:        string;
  nick:          string;
  password:      string;
  edad:          number;
  ciudad:        string;
  descripcion:   string;
  tema:          string;
  foto:          string;
  activo:        string;
  conectado:     string;
  id_genero:     number;
  tieneHijos:    number;
  tipoRelaccion: string;
  hijosDeseados: number;
  created_at:    Date | null;
  updated_at:    Date | null;
}
