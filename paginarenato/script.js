// Interactividad: Efecto de seguimiento del mouse
document.body.addEventListener("mousemove", (e) => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-effect");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  
    document.body.appendChild(cursor);
  
    setTimeout(() => {
      cursor.remove();
    }, 500);
  });
  
  

  