<iframe class="video" src="https://www.youtube-nocookie.com/embed/flTz_pSzVFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<hr>

@4.19.20 Authors: *Nathan Choi*

# Polar Equations
## Terms
**Rectangular Equations** - equations that describe the relationship between $x$ and $y$.

**Polar Equations** - equations that describe the relationship between $r$ and $\theta$.

## Graphs
Polar equations are tedious to graph, so we must memorize some *special cases*.
Each has their own *equation*, *restrictions*, and *strategies*.

<!-- tabs: start -->

#### **Circles**
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Restrictions:* $r=a$ and $r\ne 0$

$r=a\sin{\theta}$

*and*

$r=a\cos{\theta}$

### Possible Cases
#### Case #1
$r=a$ is a circle with center at origin and radius $a$

<iframe src="https://www.desmos.com/calculator/rmnipmsy7v?embed" style="height: 250px"></iframe> 

#### Case #2
$r=a\cos{\theta}$ is a circle where the center is $(\frac{a}{2}, 0)$ and radius is $\frac{a}{2}$.

<iframe src="https://www.desmos.com/calculator/aiglvyoj2e?embed" style="height: 250px"></iframe> 

#### Case #3
$r=a\sin{\theta}$ is a circle where the center is $(0, \frac{a}{2})$ and radius is $\frac{a}{2}$.

<iframe src="https://www.desmos.com/calculator/bgc3brut91?embed" style="height: 250px"></iframe> 

#### **Cardiods**
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Restrictions:* $\left|\frac{a}{b}\right|=1$

$r=a\pm b\cos{\theta}$

*and*

$r=a\pm b\sin{\theta}$

### Possible Cases
#### Case #1
$r=a\pm b\cos{\theta}$ is a cardioid where radius $= a = b$.
<iframe src="https://www.desmos.com/calculator/bfk1lfwpr4?embed" style="height: 250px"></iframe>

#### Case #2
$r=a\pm b\sin{\theta}$ is a cardioid where radius $= a = b$.
<iframe src="https://www.desmos.com/calculator/ijmh7sh2zq?embed" style="height: 250px"></iframe>

#### Mirrored Cases
!> The cardioid will face the opposite direction if $r=a - b\cos{\theta}$ or $r=a - b\sin{\theta}$

#### **Limacons**
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Notice* that the equations are completely <u>identical</u> to those of the **cardioid**. There are no restrictions.

$r=a\pm b\cos{\theta}$

*and*

$r=a\pm b\sin{\theta}$

### Possible Cases
When the relationship between $a$ and $b$ are different, there are different unique shapes.

#### Case #1 (Inner Loop)
?> Where $|\frac{a}{b}|<1$. *(Below, $b=2 a$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/ima2t80slu?embed" style="height: 250px"></iframe> 

#### Case #2 (Dimpled)
?> Where $1 < |\frac{a}{b}| < 2$. *(Below, $b=\frac{a}{\left(0.4999999999\right)\sin a+1.5}$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/gfllsvkyzj?embed" style="height: 250px"></iframe> 

#### Case #3 (Convex)
?> Where $|\frac{a}{b}| \geq 2$. *(Below, $b=0.1 a$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/e0timavdkd?embed" style="height: 250px"></iframe> 

!> It may look like a circle, but it's actually **not perfectly circular.**

#### Mirrored & Rotated Cases
1. Using $r=a\pm \sin{\theta}$ will rotate the graph on it's side.
2. The limacon will face the opposite direction if $r=a - b\cos{\theta}$ *or* $r=a - b\sin{\theta}$

#### **Rose Curves**
### Equations
There is a $cos$ variant and a $sin$ variant, just like other equations.

?> *Restrictions:* $a$ and $n$ are **not** equal to 0

$ r=a\sin{(n\theta)} $

*and*

$ r=a\cos{(n\theta)} $

Here, the $a$ represent how long each pedal is from the pole *(radius)*.

### Number of Pedals
1. When $n$ is **even**, the curve has $2n$ amount of pedals. So if $n=4$, there are $2\times4=8$ pedals.
2. When $n$ is **odd**, the curve has $n$ amount of pedals. So if $n=3$, there are $3$ pedals.

?> *Minimum Domain:* <br>As we draw the rose curve with $n$ being **odd**, we only need $\theta = [0, \pi]$ to fully draw the curve!<br>
As we draw the rose curve with $n$ being **even**, we need to have $\theta = [0, 2\pi]$ to fully draw the curve.

### Possible Cases
#### Case #1 (odd)
$$ r=a\cos{(n\theta)}, \theta = [0, \pi] $$

<iframe src="https://www.desmos.com/calculator/fqeg1c453o?embed" style="height: 250px"></iframe>

- For $cos$, the x-axis is an axis of symmetry.
- On the other hand, the y-axis an axis of symmetry for the $sin$ equation.

#### Case #2 (even)
$$ r=a\cos{(n\theta)}, \theta = [0, 2\pi]$$

<iframe src="https://www.desmos.com/calculator/1tmafdiv8i?embed" style="height: 250px"></iframe>

- Both axis are lines of symmetry for the $cos$ equation.
- The $sin$ equation will not have any pedals touch the axis

#### Mirrored Cases
- When $a < 0$ *(negative)*, odd pedal curves will be flipped.
- If the y-axis is an axis of symmetry, then the curve will be flipped along the x-axis, and vise versa.
- For even pedals, you cannot notice a difference, as both x and y axis are axes of symmetry. 

#### **Lemniscates**
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Restrictions:* $a\ne0$

$ r^2 = a^2 \sin{(2\theta)} $ *or* $ \:r = \pm\sqrt{a^2 \sin{(2\theta)}} $

*and*

$ r^2 = a^2 \cos{(2\theta)} $ *or* $ \:r = \pm\sqrt{a^2 \cos{(2\theta)}} $

- $r$ stands for the maximum distance from the pole *(radius)*.
- The negative sign in front of the square root **produces the same graph** as an equation without it.

### Possible Cases
#### Case #1 (cos)
$$ r^2 = a^2 \cos{(2\theta)} $$
<iframe src="https://www.desmos.com/calculator/hhsk5f9v1h?embed" style="height: 250px"></iframe>

#### Case #2 (sin)
$$ r^2 = a^2 \sin{(2\theta)} $$
<iframe src="https://www.desmos.com/calculator/fmkmzqwl36?embed" style="height: 250px"></iframe>
<!-- tabs: end -->