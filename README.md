He tardado 3-3h y 30 aproximadamente
He conseguido hacer el moverse pero sin que el size para el limite de los movimientos que filtra sea el mismo a no ser que lo cambies manualmente, también hice un tipo para los movimientos.
Se desarrolla la lógica del juego en el init del tablero ya que como no sé pasarle el size y también porque si uso el método submarino.mover()
fuera del submarino la x e y tienen los valores iniciales del constructor por lo que solo acepta los movimientos posibles con x e y positivos, nunca iria arriba o a la izquierda.
Al hacerlo dentro del init de tablero que es donde he elegido si.
Me faltaría lo del size, poder usar el mover() fuera del init, el trail y el prompt para disparar cada vez en un sitio
