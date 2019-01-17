# **Dot Game**

The game consists of four classes ( `foods`, `players`, `buttons`,`Text` ), three functions( `draw()`, `setup()`, `mousePressed()` )  and the connection with the html page.
### **Classes**: 
- Foods
- Buttons 
- Players
- Text

##### Foods 
In the foods class there are 6 properties, created by the constructor:

Properties | Description
--------- | -----------
    x,y     | the x and y are the coordinates that the program will start to draw the  food’s  shape. E.g. if we want a rectangle and pass 500 and 600 as the x and y coordinates the program will start from 500,600 and draw a rectangle of a certain height and width. 
	width, height     | the height and the width of the food’s shape. 
    shape 	| a string value that is going to determine the shape of the food. In this example the         foods are circles and triangles (level 3). 
colour | these property is used to adjust the colour of the shape. It’s always a string.

All the properties will be assigned to a value even if we don’t pass any parameters, as there is an _OR_ statement and the property will take the value after the or symbol. In that way, if the user omits a parameter the program will run without errors. The values that the properties are going to take if there are no parameters are 20,20,10,10,”circle” and “black” for the `x` ,`y`, `width`, `height` and  `colour` respectively.

Also, all the properties have their own get and set methods, as their values change through the program. Get methods allows us to change properties of an object with a correct value as there is error checking. The program checks if the value entered has the correct data type and then, change the property. In that way, the data enter are always valid. The get methods returns the value of the properties.
##### Methods:
The `draw` method takes an optional p5 renderer parameter (k). If the draw function is called with the k parameter it means that we want the shape to be drawn on the `createCanvas` or `createGraphics` that we set at the beginning or the program. Else, the selected shape will be drawn directly on the Canvas.

The `reset` method resets the x and y coordinates of the food. It is used after the player looses or when the player eats the food and new food must be drawn on the Canvas.

#### Players
The `Players` class is created using inheritance, i.e. it inherits all the properties and methods from the class `Foods`, but also new properties and methods are added.  `Startspeed` and `speed` are  new properties, also `move` and `Reset_properties` are added as new methods. All the properties should be in the constructor so they will be initialised. In this case the constructor is using the `super` keyword to call the constructor of the `Foods` class.  

Properties | Description
--------- | -----------
Startspeed |	is the initial speed of the object. It is used to calculate the speed of the object as the score increases. 
Speed |	the speed that the object has while playing. This speed is constantly changing as the score increases and as we chance levels. 
If no parameters are passed to these properties they will both set to 20.

##### Methods:
- `Move`: the move method is used to keep the object inside the canvas and to keep the player moving along with the mouse. If the player x coordinate is greater than the `mouseX` coordinate, that means that the player is ahead of the mouse and has to move to the left (closer to the mouse) by one. The same procedure is also used for moving to the right by one and for the y coordinates. 

- `Reset_properties`: that method is used to reset the x,y, colour and speed properties of the objects. The reset method didn’t include the speed so a new method that was resetting all the properties was needed. This method is used when the player loses.

- The set method `setCalSpeed` takes a variable `v` ,that is different for every level, and calculates the current speed of the objects. The variable `v` is checked to verify that is a number.

- The `getCalSpeed` just returns the value of the speed property.

#### Buttons
The class buttons is used for by the five buttons in the game: `Play_B`, `Back_B`, `question_mark`, `Cont_other`, `Cont_same`. The properties of the buttons are:

Properties | Description
--------- | -----------
x,y | the x,y coordinates that the program will start to draw the rectangle 
h,w| the height and the width of the rectangle 
sh_strW, sh_strok | the stroke weight and the stroke of the shape (rectangle)
sh_r, sh_g,sh_b | the r,g, b value that will give the colour of the rectangle
Tx, Ty		| the x, y coordinates that the text inside the rectangle will start
tex_s | an integer value that indicates the size of the text 
tex	| a string value that will be the text inside the button  
strW, strok | the stroke weight and stroke of the text, both integer values
Col_tex	| the colour of the text	

##### Method
`Draw`: the draw method will check if there is an optional p5 renderer parameter.
If there is, then the button will be drawn on the renderer. If not then, the button will be draw on the Canvas. 

### Text
The class text is created for the texts in the game. It has all  the properties of a text:

Properties | Description
--------- | -----------
Text_x, Text_y | the x and y coordinates that the text will be drawn
Text_strWeight, Text_Stroke | the stroke weight and stroke of the text
Text_col | the colour of the text
TextSize| the size of the text
Text_ | a string value 

##### Method
`Draw`: the draw method will check if there is an optional p5 renderer parameter.
If there is, then the button will be drawn on the renderer. If not then, the button will be draw on the Canvas.


### **Variables**:

-  `play`:  the play variable describes the interfaces of the game. i.e. 
   - play == 0 is the interface with the question mark and the play button 
   - play == 1 is the game interface with the orange dot and the monsters
   - play == 2 the interface that appears if you lose with the 2 buttons to restart 
   - play == 3 the interface with the instructions of the game and the back button.

- `death`:  a Boolean variable that is set to **true** if one of the monsters collide with the player. 
- `Can_y` :  the height of the Canvas.
- `Canv_x` : the width of the Canvas.
- `speed_div` : a variable that is different for every level and is used to calculate the speed of the player and the monsters. The greater the `speed_div` the slower the object will move.

- `isDead`: a Boolean variable that will became **true** if the player is dead. Is used as a flag to change interface and reset the variables. 
 
- `start`, `Res_Cur_level`, `info`, `back`, `ContLevel`:  Boolean variables that are **true** if the mouse press one of the buttons. Each button has it’s own Boolean variable as the coordinates of each rectangle are different, so the mouse has to collide on different coordinates in order to select different buttons.
 
- `score`: the score. It is increased every time the player eats the food. The greater the score the faster the player and monsters will move. 

- `selected`: a Boolean variable, that is **true** if the user selects a level.

- `foodCollide2`, `foodCollide` : Boolean variables that are **true** if the player collides with the food. `Foodollide2` is used for the triangle food (level 3).

- `change`: Boolean variable that is **true** if the submit button is pressed. 

- `food`: an object of class `Foods`, the only parameters that are passed are the  x and y coordinates where the food will be drawn( `Food_x` , `Food_y`). `Food_x` and `Food_y` are randomly generated numbers in the canvas range. 

- `range_x`: the width of the canvas minus 10 , which is the stroke (`Canv_x -10`)
- `range_y`: the height of the canvas minus 10, which is the stroke (`can_y-10`)

- `food2`: is the same as food variable, but `food2` also passes `food2_w`, `food2_h`, `food2_sh`, which is the food width, height and shape. The width and the shape are set from the user. `food2_h` is equal to `food2_w`. The x and y coordinates are again randomly generated.
- `player`: an object of the class `Players`. It’s the orange dot in the game. It passes the x and y coordinates that the program will start to draw the shape of the player (`player_x`,`player_y`). There are also the height and the width of the player’s shape (`player_w`, `player_h`). `pl_sh` is the shape of the player and `pl_col` is the colour of the player’s shape(string value). The x and y coordinates of the player are related to the canvas size. So, if the size of the canvas changes the player will always start in a valid position inside the canvas. Player’s height is also the same with the width.
  
- `monster`, `monster2`: objects of the class Players. There are the 2 monsters that can kill the player. `monster2` only appears in level2 and level3. Both of them pass the same parameters,  the x and y coordinates that the monsters shape will be drawn(`mon_x`,`mon_y`), the height and width(`mon_w`,`mon_h`) of the shape, their shape(`mon_sh`), theis shape’s  colour(`mon_col`) and their initial speed(`mon_speed`). Monster2 x and y coordinate are the same with monster1 plus 10. In that way, the two monsters will move separately, as they have different speeds and different start points.

- `level2`, `level3`, `level1` : Boolean values, if their value is **true** that means that the level is selected.
- `r,g,b`:   r, g, b values that are use to change the colour of the background, when the buttons are pressed.

- `k`: optional p5 renderer parameter. That means if the we pass this variable in a draw method, we expect the shape to be drawn on a different `Canvas` or `createGraphics` that we defined earlier.

-  `Name`,`Level_t`,`Dead_t`,`instructions`,`text_int` : all of them belong in the class `Text`. They all have the same properties and pass the same parameters, strokeweight, stroke, size, colour,x,y coordinates and the string value which is the text. These text can be drawn on an oprional p5.renderer if the user pass the variable k in the draw function.

All the  following x and y coordinates of the texts are related to the Canvas. By that we can ensure that the text will always be in the Canvas.(`tex_x, tex_y, totalScore_y, Levels_y, level_x ,level_y ,textDead_x, textDead_y, ins_x, ins_y, textIns_x,textIns_y`)

- `question_mark`, `Play_B`, `Back_B`, `Cont_same`, `Cont_other` : the objects of the buttons class. In other words, all the buttons in the game. All of them pass the same parameters: the strokeWeight (`b_sh_str`), the stroke (`black_stroke`) of the rectangle, the `r,g,b` values that will used to fill the rectangle (`gray_r, gray_g, gray_b`), the x,y (`b_x, b_y`), height and width of the rectangle (`b_w, b_h`) the text size(`bT_size`),  the text, the x and y coordinates of the text (`bT_x, bT_y`), the stroke weight and stroke of the text(`b_t_str` , `black_stroke`), and the colour of the text (`bl_text`).  

All the coordinates of the buttons  are given as variables that depend on the canvas height and width. In that way the buttons will always be drawn in the same position even if we rescale the game. E.g. the question mark will always be on the top right corner of the canvas. Furthermore, the x and y coordinates of the text are related to the rectangle coordinates so the text will always be inside the button.

### **Functions** :
In the game there are three functions, the mousePressed, setup and draw function.

1. `MousePressed`: this function is a p5.js function and is called every time the mouse is pressed. It checks if the coordinates of the mouse are the same as the buttons coordinates and changes the interfaces of the game based on the button pressed.

2.`Draw`: is the function that is going to draw all the shapes and text that is needed for the game.

3.`Setup`: in the setup function we create the canvas and declare all the objects. These events are only done once; in contrast with the draw function that the code inside the function is executed many times.

### **Explanation of the game** :

**1.** Enter your name on the box on the top and press submit.
**2.** Select a level to start.
**3.** You are the orange dot. You must eat as much food (black dots and triangles in level 3) as possible. You can move around with your mouse. Each dot worth one point and each triangle two. You must be careful not to collide with the monster(s). The more food you eat the faster you and the monster(s) will move.
**4.** If you lose you have two options, either restart with the same level or with a different level. If you choose to restart with a new level, you have to select the level you want. 
**5.** The background colour can be changed in any time of the game. 

### **Sourse of original code**
The original project can be found [Original Project](https://www.openprocessing.org/sketch/622617)














