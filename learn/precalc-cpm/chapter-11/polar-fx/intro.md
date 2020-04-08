# Introduction to Polar Functions
## The New System
Remember graphing with $(x,y)$ on **cartesian graphs**? Those are called **rectangular coordinates**.

<img src="/learn/precalc-cpm/chapter-11/media/carte.jpg" width="200">

*Cartesian Graph*

This chapter will go over **polar coordinates**, which instead <u>graphs distance and angle.</u>
They are represented as $(r, \theta)$.

?> **Important:** always stick with <u>radians.</u>

<img src="/learn/precalc-cpm/chapter-11/media/polar.gif" width="400">

Above is a **polar coordinate** on a cartesian graph.

### Basic Terms
* **pole** - center of the plane. *(origin of the polar graph)*
* **r** - distance the **pole**
* $\theta$ - angle (look at reference above)

## Graphing Polar Coordinates
Below is a **polar coordinate** on a **polar graph**.

One of the axis represent radius while the other represents the angle.

### Converting to $(x,y)$
Polar coordinate can be represented by a rectangular coordinate and vice versa.
Let's say we have the polar coordinate represented as $(r, \theta)$ and the rectangular coordinate as $(x, y)$

<!-- tabs:start -->
#### **Polar > Rectangular**
When converting from a **polar coordinate** to a **rectangular coordinate**:

$x=r\cos\left(\theta\right)$

*and*

$y=r\sin\left(\theta\right)$

#### **Rectangular > Polar**
When converting from a **rectangular coordinate** to a **polar coordinate**:

$r=\sqrt{x^2+y^2}$

*and*

$\theta =\tan ^{-1}\left(\frac{y}{x}\right)$

#### **Explanation**
Hopefully the equations all looked familar. They are all used to solve the sides and angles of right triangles! Take a look at a polar coordinate. 
We can draw a right traingle from the **pole**, **polar point**, and a point from the **radius axis**.

<img src="/learn/precalc-cpm/chapter-11/media/polar-tri.png" width="500">

#### Polar > Rectangular
We use some basic trig functions, $sin$ and $cos$, to find the adjacent and opposite sides of the triangle.

#### Rectangular > Polar

To find angle $\theta$, we use inverse tan ($\tan ^{-1}$) and give it $\frac{y}{x}$ *(the sides of the triangle)*.

To find the hypotenuse of the triangle, we use the pythagorean theorem $a^2 + b^2 = c^2$ because we already have the other two sides. 

<!-- tabs:end -->

## Interactive Graph
### Instructions
* Drag the *<span style="color:green">green dot</span>* to change $\theta$
* Drag the *<span style="color:purple">purple dot</span>* to change $r$
* The *red dot* is the point and is given the label $(x,y)$

[Polar Coordinates](https://www.desmos.com/calculator/lxix3dbejm?embed ':include :type=iframe')