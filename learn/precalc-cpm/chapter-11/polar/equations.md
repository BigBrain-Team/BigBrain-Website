<iframe class="video" src="https://www.youtube-nocookie.com/embed/flTz_pSzVFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<hr>

@4.19.20 Authors: *Nathan Choi*

# Polar Equations
!> :hammer: Work-in-Progress! If you'd like to help, ping *@BigBrain* on our discord.

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

#### **Cardioids**
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Restrictions:* $\left|\frac{a}{b}\right|=1$

$r=a\pm b\cos{\theta}$

*and*

$r=a\pm b\sin{\theta}$

### Possible Cases
#### Case #1
$r=a\pm b\cos{\theta}$ is a cardiod where radius $= a = b$.
<iframe src="https://www.desmos.com/calculator/bfk1lfwpr4?embed" style="height: 250px"></iframe>

#### Case #2
$r=a\pm b\sin{\theta}$ is a cardiod where radius $= a = b$.
<iframe src="https://www.desmos.com/calculator/ijmh7sh2zq?embed" style="height: 250px"></iframe>

#### Mirrored Cases
!> The cardioid will face the opposite direction if $r=a - b\cos{\theta}$ or $r=a - b\sin{\theta}$

#### **Limacons**
!> :hammer: Work-in-Progress! If you'd like to help, ping *@BigBrain* on our discord.
### Equations
In all cases, $\theta$ will always be drawn from $[0, 2\pi]$

?> *Notice* that the equations are completely <u>identical</u> to those of the **cardioid**. There are no restrictions.

$r=a\pm b\cos{\theta}$

*and*

$r=a\pm b\sin{\theta}$

### Possible Cases
When the relationsip between $a$ and $b$ are different, there are different unique shapes.

#### Case #1 (Inner Loop)
?> Where $|\frac{a}{b}|<1$. *(Below, $b=2a$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/ima2t80slu?embed" style="height: 250px"></iframe> 

#### Case #2 (Dimpled)
?> Where $1 < |\frac{a}{b}| < 2$. *(Below, $b=\frac{a}{\left(0.4999999999\right)\sin a+1.5}$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/gfllsvkyzj?embed" style="height: 250px"></iframe> 

#### Case #3 (Convex)
?> Where $|\frac{a}{b}| \geq 2$. *(Below, $b=0.1a$ is defined to create this graph.)*

<iframe src="https://www.desmos.com/calculator/e0timavdkd?embed" style="height: 250px"></iframe> 

!> It may look like a circle, but it's actually **not perfectly circular.**

#### Mirrored & Rotated Cases
1. Using $r=a\pm \sin{\theta}$ will rotate the graph on it's side.
2. The limacon will face the opposite direction if $r=a - b\cos{\theta}$ *or* $r=a - b\sin{\theta}$

#### **Rose Curves**
!> :hammer: Work-in-Progress! If you'd like to help, ping *@BigBrain* on our discord.

#### **Lemniscates**
!> :hammer: Work-in-Progress! If you'd like to help, ping *@BigBrain* on our discord.
<!-- tabs: end -->