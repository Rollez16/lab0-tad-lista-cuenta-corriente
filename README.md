# 🏦 Laboratorio 0: Implementación de TAD Lista - Gestión de Cuenta Corriente

## 📝 Descripción
Este proyecto corresponde al **Laboratorio 0** de la asignatura **Estructura de Datos**. El objetivo principal fue aplicar los conceptos de **Tipos Abstractos de Datos (TAD)** para gestionar los movimientos de una cuenta corriente, diferenciando claramente entre la **abstracción** (el qué hace) y la **implementación** (el cómo lo hace).

## 🛠️ Tecnologías Utilizadas
* **Lenguaje:** Python 3
* **Entorno:** Google Colaboratory
* **Control de Versiones:** GitHub

## 🚀 Funcionalidades Implementadas

### 1. Gestión de Movimientos (Clase `ListaMovimientos`)
Se desarrolló una clase personalizada que permite administrar una colección de movimientos bancarios con los siguientes métodos básicos:
* `agregar(movimiento)`: Añade un nuevo abono o cargo a la lista.
* `obtener(posicion)`: Recupera un movimiento específico validando que el índice exista.
* `eliminar(posicion)`: Elimina un registro de la lista de forma segura.
* `mostrar_todos()`: Visualiza el historial completo de transacciones.
* `calcular_saldo()`: Calcula el balance final acumulado (Abonos - Cargos).

### 2. Desafíos Opcionales (Nivel Avanzado)
Para robustecer el sistema, se integraron las siguientes funciones adicionales:
* **Búsqueda Inteligente:** Capacidad de filtrar movimientos por palabras clave en la descripción.
* **Filtrado de Gastos:** Identificación automática de cargos que superan un monto definido.
* **Resumen de Cuenta:** Generación de un reporte consolidado con totales de abonos, cargos y saldo final.
* **Validación de Datos:** Restricción para asegurar que solo se ingresen tipos de movimientos válidos ("abono" o "cargo").

## 🧠 Reflexiones Académicas
Durante el desarrollo se profundizó en:
* **Encapsulamiento:** Uso de clases para proteger la integridad de los datos financieros.
* **Abstracción vs Implementación:** Capacidad de definir operaciones lógicas antes de traducirlas a código funcional.
* **Uso de Git:** Flujo de trabajo profesional mediante commits y sincronización de repositorios en la nube.

---
**Autor:** Renato Baeza  
**Institución:** Universidad Mayor  
