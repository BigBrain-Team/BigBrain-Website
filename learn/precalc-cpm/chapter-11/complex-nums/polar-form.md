@5.1.20 Authors: *Nathan Choi*
# Complex Number Review
There are actually ways to write complex numbers in complex form! Sometimes, it is referred to as **trigonometric form**. 

## Deriving the Complex Polar Form
1. **First**, we know that a complex coordinate is represented as $z=a+bi$. Similar to converting from $(x, y)$, the polar coordinates can be defined as:

	- $a=r\cos\theta$

	- $b=r\sin\theta$

2. **Second**, we can substitute $a$ and $b$ to get:

	$z=r\cos\theta + i r\sin\theta$

3. **Finally**, we can factor $r$ from both terms and we get our final form:

	$z=r(\cos\theta + i\sin\theta)$

?> Using this form, we can finally **represent a complex number as a polar coordinate** using $r$ and $\theta$.

## Expressing as Polar Form
### Conversion Guide

|            **If** $a>0$            |              **If** $a<0$              |
:-----------------------------------:|:---------------------------------------:
|        $r=\sqrt{a^2+b^2}$          |           $r=\sqrt{a^2+b^2}$           |
| $\theta=\tan^{-1}({\frac{b}{a}})$  | $\theta=\tan^{-1}({\frac{b}{a}})+\pi$  |

!> **Important:** Don't forget to turn your negative angles positive! In most cases, you can just add $2\pi$.

### Example
*Question:* Express $3 - 4i$ in polar form.

<!-- tabs:start -->
#### **Step 1**
### Find Useful Equations
- First, we know that the final answer will be represented as 
$z=r(\cos\theta + i\sin\theta)$

-  We also know that $a>0$, so we use $\theta=\tan^{-1}({\frac{b}{a}})$ to find the  angle

-  All cases use the Pythagorean Theorem to find the radius: $r=\sqrt{a^2+b^2}$

#### **Step 2**
### Find Useful Equations
- First, we know that the final answer will be represented as 
$z=r(\cos\theta + i\sin\theta)$

-  We also know that $a>0$, so we use $\theta=\tan^{-1}({\frac{b}{a}})$ to find the  angle

-  All cases use the Pythagorean Theorem to find the radius: $r=\sqrt{a^2+b^2}$

### First Calculation
**Finding $r$:**
- $r=\sqrt{a^2+b^2} =\sqrt{3^2+4^2}$
- $r=\sqrt{25} = 5$

<br>

**Finding $\theta$:**
- $\theta=\tan^{-1}({\frac{b}{a}}) = \tan^{-1}({\frac{-4}{3}})$
- $\theta \approx -0.927295$ radians

#### **Step 3**
### Find Useful Equations
- First, we know that the final answer will be represented as 
$z=r(\cos\theta + i\sin\theta)$

-  We also know that $a>0$, so we use $\theta=\tan^{-1}({\frac{b}{a}})$ to find the  angle

-  All cases use the Pythagorean Theorem to find the radius: $r=\sqrt{a^2+b^2}$

### First Calculation
**Finding $r$:**
- $r=\sqrt{a^2+b^2} =\sqrt{3^2+4^2}$
- $r=\sqrt{25} = 5$

**Finding $\theta$:**
- $\theta=\tan^{-1}({\frac{b}{a}}) = \tan^{-1}({\frac{-4}{3}})$
- $\theta \approx -0.927295$ radians

### Adjust $\theta$

**Positive Angles only**
- To convert our negative angle into a positive angle, we can add $2\pi$ to the angle.
- $-0.927295 + 2\pi = 5.355890$ radians

#### **Final Step**
### Find Useful Equations
- First, we know that the final answer will be represented as 
$z=r(\cos\theta + i\sin\theta)$

-  We also know that $a>0$, so we use $\theta=\tan^{-1}({\frac{b}{a}})$ to find the  angle

-  All cases use the Pythagorean Theorem to find the radius: $r=\sqrt{a^2+b^2}$

### First Calculation
**Finding $r$:**
- $r=\sqrt{a^2+b^2} =\sqrt{3^2+4^2}$
- $r=\sqrt{25} = 5$

**Finding $\theta$:**
- $\theta=\tan^{-1}({\frac{b}{a}}) = \tan^{-1}({\frac{-4}{3}})$
- $\theta \approx -0.927295$ radians

### Adjust $\theta$

**Positive Angles only**
- To convert our negative angle into a positive angle, we can add $2\pi$ to the angle.
- $-0.927295 + 2\pi = 5.355890$ radians

### Substitute Values
Using, $z=r(\cos\theta + i\sin\theta)$, and knowing $r$ and $\theta$,
$z=5(\cos{5.355890} + i\sin{5.355890})$ :tada:

#### **Answer**
$z=5(\cos{5.355890} + i\sin{5.355890})$ :tada:

*or in lower precision*

$z=5(\cos{5.36} + i\sin{5.36})$ :tada:
<!-- tabs:end -->