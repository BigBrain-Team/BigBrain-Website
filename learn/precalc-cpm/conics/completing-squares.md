# Completing the Square
*If you already know how to do this **efficiently**, you may skip.* Do note that you need to understand what perfect square trinomials are ($a^2+2ab+b^2$).
## Basic-How-To
**Goal:** You are tring to turn a trinomial into a completed square.

Take this equation for instance: $y=12x+2x^2+1$

We will try to get it here: $y=2(x+3)^2-17$

1. **Reorder the terms**
	* It will make things easier, I promise.
	* $y=2x^2+12x+1$

2. **Factor from the variable**
	* If there is a coefficient on the $x^2$, factor that number out from all other matching variables. In this case, we will factor $2$ from $2x^2$ and $12x$.
		* *Make sure to factor out the negative too!*
	* $y=2(x^2+6x)+1$

3. **Add/Subtract the constant - the conceptual way**
	* Now, we need to factor this into a perfect square. Recall a perfect square binomail $(a+b)^2$ --> $a^2 + 2ab + b^2$, or you may have seen it written as $(x+a)^2$ --> $x^2 + 2ax + a^2$
	* You'll notice that we have the $a^2 + 2ab$ part of it, where $a=x$ and $2ab=6x$, but what about the $b^2$? Solving the second term in the trinomial for b, we get $X = 2ab$ --> $X/(2a) = b$. In this case, $6x = 2xb$ --> $3 = b$ (aka $1/2$ of the $ax$ part), and to get $b^2$, we get $3^2 = 9$.
	* In math, however, we can't just come up with + 9 and be on with it, we need to balance it. One way to do this is to also subtract the same number, in this case $9$. #9-9=0#, and we can add $0$ anywhere we want, so we get $y=2(x^2+6x+9-9)+1$
	* Finally, we can use substitution and substitute out the perfect square, $y=2((x+3)^2-9)+1$
4. **Add/Subtract the constant - the formula way**
	* Now its time to complete the square. To find the 3rd term, the constant, take the coefficent of the second term, divide by 2, then square it. 
	* $(\frac{6}{2})^2=9$
	* Now we have the constant, we can add it to the equation to create a perfect square! But we also need to subtract the same value to make the equation equal. We need to subtract the value we added **times** the number we factored with.
	* $y=2(x^2+6x+9)-9\times2+1$

5. **Simplify**
	* $2(x^2+6x+9)-17$
	* $2(x+3)^2-17$ <-- TADA :tada:

## Let's Practice
<!-- tabs:start -->

#### **Problem 1**
$y=40+x^2+14x$

#### **Problem 2**
$y=x^2+6x+1$

#### **Problem 3**
$y=3x^2+2x-3+4$

#### **Problem 4**
$y=2x^2+12x-8+4$

#### **Answer key**
* 1: *$y=(x+7)^2-9$*
* 2: *$y=(x+3)^2-8$*
* 3: *$y=3\left(x+\frac{1}{3}\right)^2+\frac{2}{3}$*
* 4: *$y=2\left(x+3\right)^2-22$*

#### **Problem 1 Solution**
* $y=40+x^2+14x$
* $y=x^2+14x+40$
* $y=(x^2+14x)+40$
* Our square trinomial is $(x+7)^2$/ since 14/2=7.
* From this, we also get expanded form $x^2+14x+49$, and we need to add and subtract the $49$
* $y=(x^2+14x+49-49)+40$
* $y=(x+7)^2-49+40$
* $y=(x+7)^2-9$
<!-- tabs:end -->
