@4.21.20 Authors: *Nathan Choi*
# Complex Number Review
## Definitions
- **Complex numbers** are a set of numbers that form $a + bi$, where $a$ and $b$ are real and $i$ is imaginary.
- $z$ is commonly used to represent a complex number. ie: $z=a+bi$
- **Complex planes** are were you graph complex numbers.
- A **complex conjugate** is a complex number where $bi$ is $-bi$. 
- The **modulus** (*sometimes absolute value*) of a complex number is the distance from the origin.
- The **argument** of a complex number is the angle between the real number axis and the vector.

## The Complex Plane
<img src="https://i.stack.imgur.com/4y97r.jpg" width="400">

- The horizontal axis represents real numbers ($\mathbb{R}$)
- The vertical axis represents imaginary numbers ($i$).

## Conjugates
- **ALL** complex numbers have a conjugate. If $z=a+bi$, its conjugate will be $\bar z=a-bi$.
- $\bar z$ <~ the bar is just a fancy way write conjugate.

We can use conjugates to calculate modulus, which you'll see next.

## Calculating Modulus
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Complex_number_illustration.svg/1200px-Complex_number_illustration.svg.png" width="250">

We can find the **modulus**, or distance from the center, of any complex number by two ways:
### Using Conjugates
Taking the square root of the product between a complex number and its conjugate is its **modulus**.

$ |a+bi| = \sqrt{z\bar z} = \sqrt{(a+bi)(a-bi)} $

### Pythagorean (Shortcut)
?> *Notice:* we can represent $a$ and $bi$ as a right triangle, thus we can use equations associated with them.

If $d$ is the **modulus**, then $d=\sqrt{a^2 + b^2}$

* <details>
	<summary>🧠 Optional Knowledge</summary>

	We can also get to that equation by simplifying the conjugate method $\sqrt{(a+bi)(a-bi)}$

	$\sqrt{(a+bi)(a-bi)}$ is a difference of squares \~> $\sqrt{a^2 - (bi)^2}$

	$i^2 = -1$ so that means $\sqrt{a^2 - (-1)(b)^2}$

	Finally, $\sqrt{a^2 + b^2}$ :tada:

</details>

### An Example

<!-- tabs: start -->

#### **Question**
Find the modulus of $3-2i$

#### **Answer**
$\sqrt{13}$

#### **Solution**
*Shortcut skips to step 4*

**Step 1:** $\sqrt{(3-2i)(3+2i)}$ <~ We can write it like this. The conjugate is $3+2i$

**Step 2:** $\sqrt{3^2-(2i)^2}$ <~ Difference of squares

**Step 3.** $\sqrt{3^2-(2^2)(-1)}$

**Step 4.** $\sqrt{3^2+2^2}$

**Step 5.** $\sqrt{13}$ <~ :tada:

<!-- tabs: end -->

## Argument
This is super simple to calculate. Since we can represent the complex number like a right triangle, **we can use trig functions** too!
All you have to do is take the inverse tangent of $bi$ and $a$ like this:

$arg(3-2i) = \tan^{-1}(\frac{3}{-2}) \approx -33.690\deg \approx 146.310\deg$