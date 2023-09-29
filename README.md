# vue-todolist

Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
Bonus:
1- se il todo ha meno di 5 caratteri esporre un messaggio di errore
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3- eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore


1. creare un html e un css fedele con:
  - tag input
  - button
  - lista non ordinata
  - elementi lista
2. ricreare sul js un array con alcuni elementi all'interno(da svuotare successivamente)  
3. ciclare, usando v-for, nel li del html
4. creare un nuovo array dove inserire le parole nuove che si inseriscono
5. usare il v model(richiamando la funzione del 7° punto) nell'input per inserire nel nuovo array il task da fare e spostare all'inizio tramite l'unshift
6. gestire la funzione di inserimento del nuovo task
7. creare un errore se ciò che viene inserito è meno di 5 caratteri
8. inserire se una task è stata svolta  tramite l'aggiunta di una classe che taglia ciò che abbiamo scritto al click
9. ricreare una funzione che elimini la task completata