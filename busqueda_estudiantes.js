// Módulo de búsqueda de estudiantes - Servicios Escolares
function buscarEstudiante(criterio) {
    const estudiantes = [
        { matricula: "2023001", nombre: "Ana García", carrera: "Informática", estatus: "Activo" },
        { matricula: "2023002", nombre: "Carlos López", carrera: "Administración", estatus: "Activo" }
    ];

    // Filtrar por matrícula o nombre
    const resultados = estudiantes.filter(est => 
        est.matricula === criterio || est.nombre.includes(criterio)
    );

    return resultados;
}
