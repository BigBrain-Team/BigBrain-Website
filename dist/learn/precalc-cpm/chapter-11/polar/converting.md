<iframe class="video" src="https://www.youtube-nocookie.com/embed/u_BOn-q7KGs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<hr>

@4.19.20 Authors: *Nathan Choi*
# Converting to Rectangular Coordinates and Back
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
We can draw a right traingle from the **pole**, **polar point**, and a point from the **polar axis**.

<img src="/learn/precalc-cpm/chapter-11/media/polar-tri.png" width="500">

#### Polar > Rectangular
We use some basic trig functions, $sin$ and $cos$, to find the adjacent and opposite sides of the triangle.

#### Rectangular > Polar

To find angle $\theta$, we use inverse tan ($\tan ^{-1}$) and give it $\frac{y}{x}$ *(the sides of the triangle)*.

To find the hypotenuse of the triangle, we use the pythagorean theorem $a^2 + b^2 = c^2$ because we already have the other two sides. 

<!-- tabs:end -->