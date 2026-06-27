---
title: "Unit 11: Matrices and Systems"
sidebar:
  order: 8
---

# Unit 11: Matrices and Systems

---

## Systems of Linear Equations

A **system of equations** asks for the values of the variables that make every equation true at the same time. For two linear equations in two variables, there are three possibilities:

| Graphs of the lines | Number of solutions | Name |
|---|---:|---|
| Intersect once | $$1$$ | consistent and independent |
| Parallel and distinct | $$0$$ | inconsistent |
| Same line | infinitely many | consistent and dependent |

The same idea extends to larger linear systems: the solution set can be one point, no points, or infinitely many points.

Geometrically, each equation describes a set of points. In two variables, each linear equation is a line, so solving a system means finding where the lines overlap. In three variables, each linear equation is usually a plane, so solving a system means finding where the planes overlap.

For a system in three variables:

- one solution means the planes meet at one point,
- no solution means the planes never all meet in one common place,
- infinitely many solutions usually means the planes overlap along a line or plane.

Algebraically, every method in this unit is trying to answer the same question: can we isolate the variables without changing the set of points that satisfies all the equations?

### Substitution and elimination

The two basic algebraic methods are:

- **Substitution**: solve one equation for one variable, then substitute into the other equations.
- **Elimination**: add multiples of equations together until one variable disappears.

<div class="theorem-box">

**Example.** Solve

$$
\begin{cases}
2x+3y=13\\
5x-y=7
\end{cases}
$$

From the second equation,

$$
y=5x-7.
$$

Substitute into the first equation:

$$
2x+3(5x-7)=13.
$$

Then

$$
17x-21=13,\qquad 17x=34,\qquad x=2.
$$

Now

$$
y=5(2)-7=3.
$$

So the solution is

$$
(2,3).
$$

</div>

---

## Matrices

A **matrix** is a rectangular array of numbers. The numbers inside the matrix are called **entries** or **elements**.

Matrices are useful because linear systems have a lot of repeated structure. In a system like

$$
\begin{cases}
2x-y+4z=7\\
3x+5y-z=1
\end{cases}
$$

the variable names $$x,y,z$$ and the plus signs do not change much. The important changing information is the coefficients and constants. A matrix strips the system down to that information so the algebra becomes cleaner.

For example,

$$
A=
\begin{bmatrix}
2 & -1 & 4\\
0 & 3 & 5
\end{bmatrix}
$$

has $$2$$ rows and $$3$$ columns, so its size is $$2\times 3$$. The entry in row $$i$$ and column $$j$$ is often written $$a_{ij}$$. In the matrix above,

$$
a_{23}=5.
$$

### Coefficient and augmented matrices

For a linear system, the **coefficient matrix** stores the coefficients of the variables. The **augmented matrix** also includes the constants on the right side.

The order of the columns matters. If the columns are arranged as $$x,y,z$$, then every row must follow that same order. Missing variables get coefficient $$0$$. For example, $$3x+z=5$$ becomes

$$
3x+0y+z=5,
$$

so its coefficient row is

$$
\begin{bmatrix}
3 & 0 & 1
\end{bmatrix}.
$$

For

$$
\begin{cases}
x+2y-3z=4\\
3x+z=5\\
-x-3y+4z=0
\end{cases}
$$

the coefficient matrix is

$$
\begin{bmatrix}
1 & 2 & -3\\
3 & 0 & 1\\
-1 & -3 & 4
\end{bmatrix}
$$

and the augmented matrix is

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -3 & 4\\
3 & 0 & 1 & 5\\
-1 & -3 & 4 & 0
\end{array}
\right].
$$

The vertical bar is only a visual separator. It reminds you where the equals signs were.

---

## Gaussian Elimination

Gaussian elimination is a systematic version of elimination. The main idea is to use one equation to remove a variable from the equations below it, then repeat with the next variable.

The reason this works is that each row in an augmented matrix is just one equation. If you replace an equation with a combination of equations that has the same information, the solution set stays the same.

For example, suppose a solution satisfies both

$$
E_1:\quad x+y=5
$$

and

$$
E_2:\quad 2x-y=4.
$$

Then that same solution must also satisfy

$$
E_2-2E_1:\quad (2x-y)-2(x+y)=4-2(5).
$$

This new equation is not random. It is built from equations the solution already satisfies, so it does not throw away any valid solutions. Gaussian elimination keeps doing this kind of replacement until the system is easy to read.

### Elementary row operations

The allowed row operations are:

1. Multiply a row by a nonzero constant.
2. Interchange two rows.
3. Add a multiple of one row to another row.

These operations do not change the solution set of the corresponding linear system.

### The shape we want

The goal is usually to create **row echelon form**, which has a staircase of zeros:

$$
\left[
\begin{array}{ccc|c}
\star & \star & \star & \star\\
0 & \star & \star & \star\\
0 & 0 & \star & \star
\end{array}
\right],
$$

where the leading nonzero entries move down and to the right. Then use **back substitution**.

Why is this shape useful? Because the bottom equation has only one variable, the row above it has two variables, and the row above that has three variables. So you solve from the bottom upward.

For example, the matrix

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -1 & 4\\
0 & 3 & 5 & 21\\
0 & 0 & 2 & 6
\end{array}
\right]
$$

means

$$
\begin{cases}
x+2y-z=4\\
3y+5z=21\\
2z=6
\end{cases}
$$

The last equation gives $$z=3$$. Then the second equation gives

$$
3y+5(3)=21,
$$

so $$y=2$$. Then the first equation gives

$$
x+2(2)-3=4,
$$

so $$x=3$$.

That is the whole purpose of Gaussian elimination: create a system where this bottom-up solving is possible.

### Pivots

A **pivot** is the entry you use to eliminate the numbers below it. In a typical $$3\times 3$$ system, the first pivot is in the $$x$$-column. You use it to turn the entries below it into zeros:

$$
\left[
\begin{array}{ccc|c}
\boxed{\star} & \star & \star & \star\\
\star & \star & \star & \star\\
\star & \star & \star & \star
\end{array}
\right]
\quad\Longrightarrow\quad
\left[
\begin{array}{ccc|c}
\boxed{\star} & \star & \star & \star\\
0 & \star & \star & \star\\
0 & \star & \star & \star
\end{array}
\right].
$$

Then the second pivot is in the $$y$$-column. Use it to eliminate below it:

$$
\left[
\begin{array}{ccc|c}
\star & \star & \star & \star\\
0 & \boxed{\star} & \star & \star\\
0 & \star & \star & \star
\end{array}
\right]
\quad\Longrightarrow\quad
\left[
\begin{array}{ccc|c}
\star & \star & \star & \star\\
0 & \boxed{\star} & \star & \star\\
0 & 0 & \star & \star
\end{array}
\right].
$$

It is often nice to make pivots equal to $$1$$, but it is not required. The only thing a pivot cannot be is $$0$$. If the entry where you want a pivot is $$0$$, swap rows if possible.

### How to eliminate an entry

Suppose the pivot is $$1$$ and the entry below it is $$4$$:

$$
\begin{bmatrix}
1 & \cdots\\
4 & \cdots
\end{bmatrix}.
$$

To turn the $$4$$ into $$0$$, replace the second row with

$$
R_2\leftarrow R_2-4R_1.
$$

If the pivot is $$2$$ and the entry below it is $$6$$:

$$
\begin{bmatrix}
2 & \cdots\\
6 & \cdots
\end{bmatrix},
$$

then use

$$
R_2\leftarrow R_2-3R_1,
$$

because $$6-3(2)=0$$.

In general, you choose the multiple that makes

$$
\text{entry below pivot}-(\text{multiple})(\text{pivot})=0.
$$

<div class="theorem-box">

**Example.** Solve

$$
\begin{cases}
x+y+z=6\\
2x-y+z=3\\
x+2y-z=2
\end{cases}
$$

Start with the augmented matrix:

$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6\\
2 & -1 & 1 & 3\\
1 & 2 & -1 & 2
\end{array}
\right].
$$

The first pivot is the $$1$$ in the top-left corner. Use it to eliminate the $$x$$-terms below it.

For row $$2$$, the entry below the pivot is $$2$$, so subtract $$2$$ times row $$1$$:

$$
R_2\leftarrow R_2-2R_1.
$$

For row $$3$$, the entry below the pivot is $$1$$, so subtract $$1$$ times row $$1$$:

$$
R_3\leftarrow R_3-R_1.
$$

This gives

$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6\\
0 & -3 & -1 & -9\\
0 & 1 & -2 & -4
\end{array}
\right].
$$

Now we need a pivot in the second column. The entry $$1$$ in row $$3$$ is easier to use than the entry $$-3$$ in row $$2$$, so swap rows $$2$$ and $$3$$:

$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6\\
0 & 1 & -2 & -4\\
0 & -3 & -1 & -9
\end{array}
\right]
$$

Now use the second pivot, which is $$1$$, to eliminate the $$-3$$ below it. Since

$$
-3+3(1)=0,
$$

use

$$
R_3\leftarrow R_3+3R_2.
$$

Then

$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 6\\
0 & 1 & -2 & -4\\
0 & 0 & -7 & -21
\end{array}
\right].
$$

Now the matrix is in row echelon form. Translate it back into equations:

$$
\begin{cases}
x+y+z=6\\
y-2z=-4\\
-7z=-21
\end{cases}
$$

Back substitution starts at the bottom. The last row gives

$$
-7z=-21,
$$

so

$$
z=3.
$$

The second row gives

$$
y-2z=-4 \quad\Longrightarrow\quad y=2.
$$

The first row gives

$$
x+y+z=6 \quad\Longrightarrow\quad x=1.
$$

Thus

$$
(x,y,z)=(1,2,3).
$$

</div>

### Detecting special cases

During elimination, a row like

$$
\left[
\begin{array}{ccc|c}
0 & 0 & 0 & 5
\end{array}
\right]
$$

means

$$
0=5,
$$

so the system has **no solution**.

A row like

$$
\left[
\begin{array}{ccc|c}
0 & 0 & 0 & 0
\end{array}
\right]
$$

means one equation became redundant. If at least one variable is free, the system has **infinitely many solutions**.

---

## Matrix Operations

Matrix operations are designed to preserve the rectangular structure of the data. The rules may feel more restrictive than ordinary arithmetic, but each restriction is there because the entries have positions. You can only combine entries when their positions match, and matrix multiplication has to respect row-column relationships.

### Equality

Two matrices are equal only if they have the same size and all corresponding entries are equal.

### Addition and subtraction

You can add or subtract matrices only when they have the same size:

This is because addition is done position-by-position. The top-left entries combine, the top-right entries combine, and so on. If the matrices have different sizes, some entries do not have partners.

$$
\begin{bmatrix}
1 & 4\\
-2 & 3
\end{bmatrix}
+
\begin{bmatrix}
5 & -1\\
7 & 0
\end{bmatrix}
=
\begin{bmatrix}
6 & 3\\
5 & 3
\end{bmatrix}.
$$

### Scalar multiplication

To multiply a matrix by a scalar, multiply every entry by that scalar:

Scalar multiplication stretches every entry by the same factor. If the matrix represents data, every data value is being scaled. If the matrix represents equations, multiplying a row by a scalar is the same idea as multiplying both sides of an equation by that scalar.

$$
-2
\begin{bmatrix}
3 & -1\\
0 & 5
\end{bmatrix}
=
\begin{bmatrix}
-6 & 2\\
0 & -10
\end{bmatrix}.
$$

### Matrix multiplication

The product $$AB$$ is defined only when the number of columns of $$A$$ equals the number of rows of $$B$$.

Matrix multiplication is not entry-by-entry multiplication. It is built around dot products. The rows of the first matrix interact with the columns of the second matrix.

One reason this rule matters is that matrices often represent transformations or systems of linear combinations. Multiplying matrices combines those actions. If $$A$$ changes one vector and $$B$$ changes another, then $$AB$$ represents doing one action after the other. Order matters, which is why $$AB$$ and $$BA$$ can be different.

If $$A$$ is $$m\times n$$ and $$B$$ is $$n\times p$$, then $$AB$$ is $$m\times p$$.

Each entry of $$AB$$ is found by taking a row-column dot product:

$$
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
\begin{bmatrix}
5 & 6\\
7 & 8
\end{bmatrix}
=
\begin{bmatrix}
1(5)+2(7) & 1(6)+2(8)\\
3(5)+4(7) & 3(6)+4(8)
\end{bmatrix}
=
\begin{bmatrix}
19 & 22\\
43 & 50
\end{bmatrix}.
$$

Matrix multiplication is **not usually commutative**:

$$
AB\ne BA
$$

in general. Sometimes one product is defined and the other is not.

---

## Identity and Inverse Matrices

A **square matrix** has the same number of rows and columns. The identity matrix is the matrix version of the number $$1$$.

The identity matrix is important because it does nothing when you multiply by it. It is the matrix version of leaving something unchanged. This gives us a way to talk about "undoing" a matrix.

For $$2\times 2$$ matrices,

$$
I_2=
\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}.
$$

For any compatible square matrix $$A$$,

$$
AI=IA=A.
$$

If a square matrix $$A$$ has a matrix $$A^{-1}$$ such that

$$
AA^{-1}=A^{-1}A=I,
$$

then $$A^{-1}$$ is the **inverse** of $$A$$. A matrix with an inverse is **invertible** or **nonsingular**. A matrix without an inverse is **singular**.

Think of $$A^{-1}$$ as the operation that reverses $$A$$. If multiplying by $$A$$ mixes the variables together, multiplying by $$A^{-1}$$ unmixes them. This is why inverses can solve systems: the coefficient matrix mixes the variables into the constants, and the inverse recovers the original variables.

Not every square matrix can be undone. Some matrices collapse information. For example, if two equations are really multiples of the same equation, they do not contain enough independent information to recover a unique solution.

### Inverse of a 2 by 2 matrix

For

$$
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix},
$$

the determinant is

$$
\det(A)=ad-bc.
$$

:::key{name="Inverse of a 2×2 matrix"}
If $$ad-bc\ne 0$$, then

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d & -b\\
-c & a
\end{bmatrix}.
$$

If $$ad-bc=0$$, then the inverse does not exist.
:::

<div class="theorem-box">

**Example.** Find the inverse of

$$
A=
\begin{bmatrix}
2 & 1\\
5 & 3
\end{bmatrix}.
$$

The determinant is

$$
2(3)-1(5)=1.
$$

Therefore

$$
A^{-1}
=
\frac{1}{1}
\begin{bmatrix}
3 & -1\\
-5 & 2
\end{bmatrix}
=
\begin{bmatrix}
3 & -1\\
-5 & 2
\end{bmatrix}.
$$

</div>

### Solving systems with inverses

A linear system can be written as

$$
AX=B,
$$

where $$A$$ is the coefficient matrix, $$X$$ is the variable column, and $$B$$ is the constant column. If $$A^{-1}$$ exists, then

$$
X=A^{-1}B.
$$

<div class="theorem-box">

**Example.** Solve

$$
\begin{cases}
2x+y=7\\
5x+3y=18
\end{cases}
$$

Write the system as

$$
\begin{bmatrix}
2 & 1\\
5 & 3
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
7\\
18
\end{bmatrix}.
$$

Using the inverse from the previous example,

$$
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
3 & -1\\
-5 & 2
\end{bmatrix}
\begin{bmatrix}
7\\
18
\end{bmatrix}
=
\begin{bmatrix}
21-18\\
-35+36
\end{bmatrix}
=
\begin{bmatrix}
3\\
1
\end{bmatrix}.
$$

So

$$
(x,y)=(3,1).
$$

</div>

For larger square matrices, one way to find the inverse is to row-reduce the augmented matrix

$$
\left[
\begin{array}{c|c}
A & I
\end{array}
\right].
$$

If row operations transform it into

$$
\left[
\begin{array}{c|c}
I & B
\end{array}
\right],
$$

then

$$
B=A^{-1}.
$$

---

## Determinants and Cramer's Rule

The determinant is a number attached to a square matrix. At first it may look like a random formula, but its job is very important: it tells us whether the matrix has enough independent information to be invertible.

For a $$2\times 2$$ coefficient matrix

$$
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix},
$$

the two rows correspond to the coefficient patterns in two equations:

$$
ax+by=\text{constant},
\qquad
cx+dy=\text{constant}.
$$

If the two rows point in genuinely different directions, the equations usually give two independent pieces of information and the system has one solution. If one row is a multiple of the other, the equations are parallel or identical, so the system either has no solution or infinitely many solutions.

The determinant detects this. For a $$2\times 2$$ matrix,

$$
\det
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
=ad-bc.
$$

If $$ad-bc=0$$, the rows or columns are dependent in the sense that one direction has collapsed into another. The matrix is singular and has no inverse. If $$ad-bc\ne 0$$, the matrix is invertible.

<div class="theorem-box">

**Example.** Compare the determinants:

$$
A=
\begin{bmatrix}
1 & 2\\
3 & 6
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
1 & 2\\
3 & 5
\end{bmatrix}.
$$

For $$A$$,

$$
\det(A)=1(6)-2(3)=0.
$$

The second row is $$3$$ times the first row, so the two rows do not give independent information.

For $$B$$,

$$
\det(B)=1(5)-2(3)=-1.
$$

This is nonzero, so $$B$$ is invertible and a system with coefficient matrix $$B$$ has exactly one solution.

</div>

For a $$3\times 3$$ matrix, one useful expansion is along the first row. Each entry in the first row gets multiplied by the determinant of the $$2\times 2$$ matrix left behind after deleting that entry's row and column:

$$
\det
\begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
=
a(ei-fh)-b(di-fg)+c(dh-eg).
$$

If $$\det(A)\ne 0$$, then $$A$$ is invertible and the system $$AX=B$$ has exactly one solution.

The determinant also has a geometric meaning. In two dimensions, the absolute value of the determinant gives the area scale factor of the matrix transformation. If the determinant is $$0$$, area gets flattened to zero, meaning the transformation collapses the plane onto a line or point. That collapse is exactly why the matrix cannot be undone.

### Cramer's Rule for 2 by 2 systems

Cramer's Rule is a determinant-based way to solve a system. It is not usually the fastest method for large systems, but it is useful because it shows how determinants encode the solution.

The denominator determinant $$D$$ measures whether the coefficient matrix is invertible. The numerator determinants $$D_x$$ and $$D_y$$ replace one coefficient column at a time with the constants. This isolates how much of the solution belongs to each variable.

For

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

let

$$
D=
\begin{vmatrix}
a_1 & b_1\\
a_2 & b_2
\end{vmatrix}.
$$

If $$D\ne 0$$, then

$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D},
$$

where

$$
D_x=
\begin{vmatrix}
c_1 & b_1\\
c_2 & b_2
\end{vmatrix},
\qquad
D_y=
\begin{vmatrix}
a_1 & c_1\\
a_2 & c_2
\end{vmatrix}.
$$

<div class="theorem-box">

**Example.** Solve

$$
\begin{cases}
3x+2y=16\\
x-4y=-6
\end{cases}
$$

Compute

$$
D=
\begin{vmatrix}
3 & 2\\
1 & -4
\end{vmatrix}
=3(-4)-2(1)=-14.
$$

Then

$$
D_x=
\begin{vmatrix}
16 & 2\\
-6 & -4
\end{vmatrix}
=16(-4)-2(-6)=-52,
$$

and

$$
D_y=
\begin{vmatrix}
3 & 16\\
1 & -6
\end{vmatrix}
=3(-6)-16(1)=-34.
$$

Thus

$$
x=\frac{-52}{-14}=\frac{26}{7},
\qquad
y=\frac{-34}{-14}=\frac{17}{7}.
$$

</div>

---

## Nonlinear Systems

A **nonlinear system** has at least one equation that is not linear. The solutions are still points that satisfy every equation at once, but the graphs may intersect in more than one point.

Linear systems are predictable: two lines can meet once, never meet, or be the same line. Nonlinear systems are more flexible because curves can bend back and meet each other multiple times. A line and a circle can intersect twice, once, or not at all. Two circles can also intersect twice, once, or not at all.

The goal is still the same: find all ordered pairs that satisfy every equation. The difference is that the algebra often produces quadratics or higher-degree equations, so there may be multiple solutions.

:::strategy{title="Nonlinear systems"}
- Use substitution when one equation is easy to solve for one variable.
- Use elimination when the nonlinear terms can be canceled.
- Check all answers, especially after squaring or multiplying by expressions involving variables.
:::

<div class="theorem-box">

**Example.** Solve

$$
\begin{cases}
x^2+y^2=25\\
y=x+1
\end{cases}
$$

Substitute $$y=x+1$$ into the circle equation:

$$
x^2+(x+1)^2=25.
$$

Then

$$
2x^2+2x+1=25,
$$

so

$$
2x^2+2x-24=0.
$$

Divide by $$2$$:

$$
x^2+x-12=0.
$$

Factor:

$$
(x+4)(x-3)=0.
$$

Thus $$x=-4$$ or $$x=3$$. Since $$y=x+1$$, the solutions are

$$
(-4,-3)\text{ and }(3,4).
$$

</div>

---

## Systems of Inequalities

A system of inequalities asks for the region that satisfies every inequality at the same time.

Equations usually describe boundaries: lines, circles, parabolas, and so on. Inequalities describe regions on one side of those boundaries. A system of inequalities asks where all the shaded regions overlap.

For example, $$y>2x+1$$ means all points above the line $$y=2x+1$$. The line itself is not included because the inequality is strict. In contrast, $$y\ge 2x+1$$ includes the line.

:::strategy{title="Graphing a linear inequality"}
1. Graph the boundary line.
2. Use a solid line for $$\le$$ or $$\ge$$.
3. Use a dashed line for $$<$$ or $$>$$.
4. Shade the side that satisfies the inequality.
5. Repeat for every inequality; the solution is the overlap.
:::

<div class="theorem-box">

**Example.** Describe the solution region:

$$
\begin{cases}
y\ge 2x-1\\
y< -x+5
\end{cases}
$$

The first boundary is the solid line $$y=2x-1$$. Shade above it.

The second boundary is the dashed line $$y=-x+5$$. Shade below it.

The solution is the region between the two lines:

$$
2x-1\le y< -x+5.
$$

This region exists where

$$
2x-1<-x+5,
$$

so

$$
3x<6,\qquad x<2.
$$

</div>
---

## Practice

::::problem
1. Solve the system using Gaussian elimination:

    $$
    \begin{cases}
    2x-y+3z=9\\
    x+2y-z=2\\
    3x+y+z=8
    \end{cases}
    $$

:::solution
Start with the augmented matrix:

$$
\left[
\begin{array}{ccc|c}
2&-1&3&9\\
1&2&-1&2\\
3&1&1&8
\end{array}
\right].
$$

Swap rows $$1$$ and $$2$$:

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
2&-1&3&9\\
3&1&1&8
\end{array}
\right].
$$

Eliminate below the first pivot:

$$
R_2\leftarrow R_2-2R_1,\qquad R_3\leftarrow R_3-3R_1.
$$

Then

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
0&-5&5&5\\
0&-5&4&2
\end{array}
\right].
$$

Subtract row $$2$$ from row $$3$$:

$$
\left[
\begin{array}{ccc|c}
1&2&-1&2\\
0&-5&5&5\\
0&0&-1&-3
\end{array}
\right].
$$

The last row gives

$$
-z=-3,
$$

so

$$
z=3.
$$

From row $$2$$,

$$
-5y+5z=5.
$$

Thus

$$
-5y+15=5,
$$

so

$$
y=2.
$$

From row $$1$$,

$$
x+2y-z=2.
$$

Therefore

$$
x+4-3=2,
$$

so $$x=1$$. The solution is

$$
\boxed{(1,2,3)}.
$$
:::
::::

::::problem
2. Solve the system and classify it as having one solution, no solution, or infinitely many solutions:

    $$
    \begin{cases}
    x+2y-z=4\\
    2x+4y-2z=8\\
    3x-y+z=1
    \end{cases}
    $$

:::solution
The second equation is exactly $$2$$ times the first equation, so it does not add new information. Use the first and third equations:

$$
\begin{cases}
x+2y-z=4\\
3x-y+z=1
\end{cases}
$$

Let $$z=t$$. Then

$$
x+2y=4+t
$$

and

$$
3x-y=1-t.
$$

From the first equation,

$$
x=4+t-2y.
$$

Substitute:

$$
3(4+t-2y)-y=1-t.
$$

Then

$$
12+3t-7y=1-t,
$$

so

$$
7y=11+4t,
\qquad
y=\frac{11+4t}{7}.
$$

Now

$$
x=4+t-2\left(\frac{11+4t}{7}\right)=\frac{6-t}{7}.
$$

Thus the system has infinitely many solutions:

$$
\boxed{(x,y,z)=\left(\frac{6-t}{7},\frac{11+4t}{7},t\right),\quad t\in\mathbb R}.
$$
:::
::::

::::problem
3. Find all values of $$k$$ for which the system has no unique solution:

    $$
    \begin{cases}
    kx+2y=6\\
    8x+ky=12
    \end{cases}
    $$

    For each such value of $$k$$, determine whether the system has no solution or infinitely many solutions.

:::solution
The coefficient matrix is

$$
\begin{bmatrix}
k&2\\
8&k
\end{bmatrix}.
$$

The system has no unique solution when the determinant is zero:

$$
k^2-16=0.
$$

Thus

$$
k=\pm4.
$$

If $$k=4$$, the system is

$$
\begin{cases}
4x+2y=6\\
8x+4y=12
\end{cases}
$$

and the second equation is $$2$$ times the first. So there are infinitely many solutions.

If $$k=-4$$, the system is

$$
\begin{cases}
-4x+2y=6\\
8x-4y=12
\end{cases}
$$

Multiplying the first equation by $$-2$$ gives

$$
8x-4y=-12,
$$

which contradicts $$8x-4y=12$$. So there is no solution.

Therefore:

$$
\boxed{k=4\text{ gives infinitely many solutions, and }k=-4\text{ gives no solution}.}
$$
:::
::::

::::problem
4. Let

    $$
    A=\begin{bmatrix}2&-1\\3&4\end{bmatrix},
    \qquad
    B=\begin{bmatrix}0&5\\-2&1\end{bmatrix}.
    $$

    Compute $$2A-3B$$, $$AB$$, and $$BA$$.

:::solution
First,

$$
2A=
\begin{bmatrix}
4&-2\\
6&8
\end{bmatrix},
\qquad
3B=
\begin{bmatrix}
0&15\\
-6&3
\end{bmatrix}.
$$

So

$$
2A-3B=
\begin{bmatrix}
4&-17\\
12&5
\end{bmatrix}.
$$

Next,

$$
AB=
\begin{bmatrix}
2&-1\\
3&4
\end{bmatrix}
\begin{bmatrix}
0&5\\
-2&1
\end{bmatrix}
=
\begin{bmatrix}
2&9\\
-8&19
\end{bmatrix}.
$$

Also,

$$
BA=
\begin{bmatrix}
0&5\\
-2&1
\end{bmatrix}
\begin{bmatrix}
2&-1\\
3&4
\end{bmatrix}
=
\begin{bmatrix}
15&20\\
-1&6
\end{bmatrix}.
$$

Thus

$$
\boxed{
2A-3B=
\begin{bmatrix}
4&-17\\
12&5
\end{bmatrix},
\quad
AB=
\begin{bmatrix}
2&9\\
-8&19
\end{bmatrix},
\quad
BA=
\begin{bmatrix}
15&20\\
-1&6
\end{bmatrix}
}.
$$
:::
::::

::::problem
5. Let

    $$
    A=\begin{bmatrix}1&2\\0&3\end{bmatrix},
    \qquad
    B=\begin{bmatrix}a&b\\c&d\end{bmatrix}.
    $$

    Find all matrices $$B$$ such that $$AB=BA$$.

:::solution
Compute $$AB$$:

$$
AB=
\begin{bmatrix}
1&2\\
0&3
\end{bmatrix}
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a+2c&b+2d\\
3c&3d
\end{bmatrix}.
$$

Compute $$BA$$:

$$
BA=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}
1&2\\
0&3
\end{bmatrix}
=
\begin{bmatrix}
a&2a+3b\\
c&2c+3d
\end{bmatrix}.
$$

Set corresponding entries equal:

$$
a+2c=a,\qquad b+2d=2a+3b,\qquad 3c=c,\qquad 3d=2c+3d.
$$

The first and third equations give $$c=0$$. Then the fourth is automatically true. The second equation gives

$$
2d=2a+2b,
$$

so

$$
d=a+b.
$$

Therefore

$$
\boxed{
B=
\begin{bmatrix}
a&b\\
0&a+b
\end{bmatrix}
\text{ for any real numbers }a,b.
}
$$
:::
::::

::::problem
6. Find $$A^{-1}$$, if it exists, and use it to solve $$AX=B$$:

    $$
    A=\begin{bmatrix}4&7\\2&5\end{bmatrix},
    \qquad
    B=\begin{bmatrix}1\\-3\end{bmatrix}.
    $$

:::solution
The determinant is

$$
4(5)-7(2)=6.
$$

Since the determinant is nonzero, the inverse exists:

$$
A^{-1}
=
\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}.
$$

Then

$$
X=A^{-1}B
=
\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}
\begin{bmatrix}
1\\
-3
\end{bmatrix}.
$$

Compute:

$$
X=
\frac16
\begin{bmatrix}
5+21\\
-2-12
\end{bmatrix}
=
\frac16
\begin{bmatrix}
26\\
-14
\end{bmatrix}
=
\begin{bmatrix}
13/3\\
-7/3
\end{bmatrix}.
$$

So

$$
\boxed{A^{-1}=\frac16
\begin{bmatrix}
5&-7\\
-2&4
\end{bmatrix}
\quad\text{and}\quad
X=
\begin{bmatrix}
13/3\\
-7/3
\end{bmatrix}.}
$$
:::
::::

::::problem
7. Find the inverse of

    $$
    A=\begin{bmatrix}
    1&2&0\\
    0&1&3\\
    0&0&2
    \end{bmatrix}.
    $$

:::solution
Let

$$
A^{-1}=
\begin{bmatrix}
p&q&r\\
s&t&u\\
v&w&n
\end{bmatrix}.
$$

Since $$A$$ is upper triangular, solve by row-reducing $$[A\mid I]$$:

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&3&0&1&0\\
0&0&2&0&0&1
\end{array}
\right].
$$

Make the third pivot $$1$$:

$$
R_3\leftarrow \frac12R_3
$$

so

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&3&0&1&0\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Eliminate above the third pivot:

$$
R_2\leftarrow R_2-3R_3.
$$

Then

$$
\left[
\begin{array}{ccc|ccc}
1&2&0&1&0&0\\
0&1&0&0&1&-3/2\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Eliminate above the second pivot:

$$
R_1\leftarrow R_1-2R_2.
$$

Then

$$
\left[
\begin{array}{ccc|ccc}
1&0&0&1&-2&3\\
0&1&0&0&1&-3/2\\
0&0&1&0&0&1/2
\end{array}
\right].
$$

Thus

$$
\boxed{
A^{-1}=
\begin{bmatrix}
1&-2&3\\
0&1&-3/2\\
0&0&1/2
\end{bmatrix}
}.
$$
:::
::::

::::problem
8. Find all values of $$t$$ for which the matrix is singular:

    $$
    A=\begin{bmatrix}
    t&1&0\\
    2&t&1\\
    0&3&t
    \end{bmatrix}.
    $$

:::solution
Compute the determinant:

$$
\det(A)
=
\begin{vmatrix}
t&1&0\\
2&t&1\\
0&3&t
\end{vmatrix}.
$$

Expand along the first row:

$$
\det(A)
=
t
\begin{vmatrix}
t&1\\
3&t
\end{vmatrix}
-
1
\begin{vmatrix}
2&1\\
0&t
\end{vmatrix}.
$$

So

$$
\det(A)=t(t^2-3)-2t=t^3-5t=t(t^2-5).
$$

The matrix is singular when $$\det(A)=0$$:

$$
t(t^2-5)=0.
$$

Therefore

$$
\boxed{t=0,\ \sqrt5,\ -\sqrt5}.
$$
:::
::::

::::problem
9. Use Cramer's Rule to solve:

    $$
    \begin{cases}
    3x-2y=11\\
    5x+4y=7
    \end{cases}
    $$

:::solution
Compute

$$
D=
\begin{vmatrix}
3&-2\\
5&4
\end{vmatrix}
=3(4)-(-2)(5)=22.
$$

Then

$$
D_x=
\begin{vmatrix}
11&-2\\
7&4
\end{vmatrix}
=11(4)-(-2)(7)=58,
$$

and

$$
D_y=
\begin{vmatrix}
3&11\\
5&7
\end{vmatrix}
=3(7)-11(5)=-34.
$$

Thus

$$
x=\frac{D_x}{D}=\frac{58}{22}=\frac{29}{11},
\qquad
y=\frac{D_y}{D}=\frac{-34}{22}=-\frac{17}{11}.
$$

So

$$
\boxed{\left(\frac{29}{11},-\frac{17}{11}\right)}.
$$
:::
::::

::::problem
10. A quadratic function $$f(x)=ax^2+bx+c$$ passes through $$(-1,6)$$, $$(2,3)$$, and $$(4,15)$$. Use a system of equations to find $$a,b,c$$.

:::solution
Use the three points in $$f(x)=ax^2+bx+c$$.

For $$(-1,6)$$:

$$
a-b+c=6.
$$

For $$(2,3)$$:

$$
4a+2b+c=3.
$$

For $$(4,15)$$:

$$
16a+4b+c=15.
$$

Subtract the first equation from the second:

$$
3a+3b=-3,
$$

so

$$
a+b=-1.
$$

Subtract the second equation from the third:

$$
12a+2b=12,
$$

so

$$
6a+b=6.
$$

Subtract $$a+b=-1$$ from $$6a+b=6$$:

$$
5a=7,
$$

so

$$
a=\frac75.
$$

Then

$$
b=-1-\frac75=-\frac{12}{5}.
$$

Use $$a-b+c=6$$:

$$
\frac75-\left(-\frac{12}{5}\right)+c=6,
$$

so

$$
\frac{19}{5}+c=6,
\qquad
c=\frac{11}{5}.
$$

Therefore

$$
\boxed{f(x)=\frac75x^2-\frac{12}{5}x+\frac{11}{5}}.
$$
:::
::::

::::problem
11. Solve the nonlinear system:

    $$
    \begin{cases}
    x^2+y^2=25\\
    x-y=1
    \end{cases}
    $$

:::solution
From $$x-y=1$$,

$$
x=y+1.
$$

Substitute into $$x^2+y^2=25$$:

$$
(y+1)^2+y^2=25.
$$

Then

$$
2y^2+2y+1=25,
$$

so

$$
2y^2+2y-24=0.
$$

Divide by $$2$$:

$$
y^2+y-12=0.
$$

Factor:

$$
(y+4)(y-3)=0.
$$

Thus $$y=-4$$ or $$y=3$$. Since $$x=y+1$$, the solutions are

$$
\boxed{(-3,-4)\text{ and }(4,3)}.
$$
:::
::::

::::problem
12. Solve the nonlinear system:

    $$
    \begin{cases}
    xy=12\\
    x+y=8
    \end{cases}
    $$

:::solution
Since

$$
x+y=8
$$

and

$$
xy=12,
$$

the numbers $$x$$ and $$y$$ are roots of the quadratic

$$
t^2-8t+12=0.
$$

Factor:

$$
(t-2)(t-6)=0.
$$

So the two numbers are $$2$$ and $$6$$. Therefore

$$
\boxed{(x,y)=(2,6)\text{ or }(6,2)}.
$$
:::
::::

::::problem
13. Find the vertices and area of the region satisfying

    $$
    \begin{cases}
    x\ge 0\\
    y\ge 0\\
    x+2y\le 8\\
    3x+y\le 9
    \end{cases}
    $$

:::solution
The region is in the first quadrant and below both lines:

$$
x+2y=8
$$

and

$$
3x+y=9.
$$

The intercepts on the axes are:

- On the $$x$$-axis: $$3x+y\le 9$$ gives $$x\le 3$$, so the vertex is $$(3,0)$$.
- On the $$y$$-axis: $$x+2y\le 8$$ gives $$y\le 4$$, so the vertex is $$(0,4)$$.

Find the intersection of the two boundary lines:

$$
\begin{cases}
x+2y=8\\
3x+y=9
\end{cases}
$$

From the first equation, $$x=8-2y$$. Substitute:

$$
3(8-2y)+y=9.
$$

Then

$$
24-5y=9,
$$

so

$$
y=3.
$$

Then

$$
x=8-2(3)=2.
$$

The vertices are

$$
(0,0),\quad (3,0),\quad (2,3),\quad (0,4).
$$

Use the shoelace formula:

$$
\text{Area}
=\frac12\left|(0\cdot0+3\cdot3+2\cdot4+0\cdot0)-(0\cdot3+0\cdot2+3\cdot0+4\cdot0)\right|.
$$

Thus

$$
\text{Area}=\frac12(9+8)=\frac{17}{2}.
$$

So

$$
\boxed{\text{vertices }(0,0),(3,0),(2,3),(0,4)\text{ and area }\frac{17}{2}}.
$$
:::
::::

::::problem
14. A matrix transformation sends the point $$(x,y)$$ to

    $$
    \begin{bmatrix}
    x'\\
    y'
    \end{bmatrix}
    =
    \begin{bmatrix}
    2&-1\\
    1&1
    \end{bmatrix}
    \begin{bmatrix}
    x\\
    y
    \end{bmatrix}.
    $$

    Find the original point $$(x,y)$$ that maps to $$(7,5)$$. Then find the image of the line $$y=2x+1$$ under this transformation.

:::solution
We need

$$
\begin{bmatrix}
2&-1\\
1&1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
7\\
5
\end{bmatrix}.
$$

This gives

$$
\begin{cases}
2x-y=7\\
x+y=5
\end{cases}
$$

Add the equations:

$$
3x=12,
$$

so $$x=4$$. Then $$y=1$$. The original point is

$$
\boxed{(4,1)}.
$$

Now let points on the original line be written as

$$
(x,y)=(x,2x+1).
$$

The transformed coordinates satisfy

$$
x'=2x-y=2x-(2x+1)=-1,
$$

and

$$
y'=x+y=x+(2x+1)=3x+1.
$$

As $$x$$ varies, $$y'$$ varies freely, but $$x'$$ is always $$-1$$. Therefore the image of the line is

$$
\boxed{x'=-1}.
$$
:::
::::

::::problem
15. A small economy has two sectors: food and tools. Producing one unit of food requires $$0.20$$ units of food and $$0.10$$ units of tools. Producing one unit of tools requires $$0.30$$ units of food and $$0.20$$ units of tools. External demand is $$110$$ units of food and $$80$$ units of tools. Let $$F$$ and $$T$$ be the total production levels. Set up and solve the matrix equation for $$F$$ and $$T$$.

:::solution
The total production must satisfy internal demand plus external demand.

Food production:

$$
F=0.20F+0.30T+110.
$$

Tools production:

$$
T=0.10F+0.20T+80.
$$

Move internal demand terms to the left:

$$
0.80F-0.30T=110,
$$

and

$$
-0.10F+0.80T=80.
$$

In matrix form:

$$
\begin{bmatrix}
0.80&-0.30\\
-0.10&0.80
\end{bmatrix}
\begin{bmatrix}
F\\
T
\end{bmatrix}
=
\begin{bmatrix}
110\\
80
\end{bmatrix}.
$$

Clear decimals by multiplying both equations by $$10$$:

$$
\begin{cases}
8F-3T=1100\\
-F+8T=800
\end{cases}
$$

From the second equation,

$$
F=8T-800.
$$

Substitute into the first:

$$
8(8T-800)-3T=1100.
$$

Then

$$
64T-6400-3T=1100,
$$

so

$$
61T=7500.
$$

Thus

$$
T=\frac{7500}{61}.
$$

Then

$$
F=8\left(\frac{7500}{61}\right)-800
=\frac{60000}{61}-\frac{48800}{61}
=\frac{11200}{61}.
$$

So the required production levels are

$$
\boxed{F=\frac{11200}{61}\approx 183.61,\qquad T=\frac{7500}{61}\approx 122.95}.
$$
:::
::::

::::problem
16. Extension (Cayley-Hamilton and Matrix Powers).

Let

    $$
    A=\begin{bmatrix}a&b\\c&d\end{bmatrix},
    \qquad
    \operatorname{tr}(A)=a+d,
    \qquad
    \det(A)=ad-bc.
    $$

    $$(A)$$ Prove the Cayley-Hamilton identity

    $$
    A^2-\operatorname{tr}(A)A+\det(A)I=0.
    $$

    $$(B)$$ Use part $$(A)$$ to derive the inverse formula for $$A$$ when $$\det(A)\ne 0$$.

    $$(C)$$ Explain why every power $$A^n$$ for $$n\ge 2$$ can be rewritten in the form

    $$
    A^n=\alpha_n A+\beta_n I
    $$

    for some constants $$\alpha_n$$ and $$\beta_n$$.

    $$(D)$$ Let

    $$
    M=\begin{bmatrix}2&1\\1&1\end{bmatrix}.
    $$

    Use part $$(C)$$ to compute $$M^6$$ without multiplying six matrices directly.

:::solution
Part $$(A)$$. Compute $$A^2$$:

$$
A^2=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a^2+bc&ab+bd\\
ac+cd&bc+d^2
\end{bmatrix}.
$$

Also,

$$
\operatorname{tr}(A)A
=(a+d)
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
a^2+ad&ab+bd\\
ac+cd&ad+d^2
\end{bmatrix}.
$$

Finally,

$$
\det(A)I
=(ad-bc)
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
=
\begin{bmatrix}
ad-bc&0\\
0&ad-bc
\end{bmatrix}.
$$

Now compute

$$
A^2-\operatorname{tr}(A)A+\det(A)I.
$$

The top-left entry is

$$
(a^2+bc)-(a^2+ad)+(ad-bc)=0.
$$

The top-right entry is

$$
(ab+bd)-(ab+bd)+0=0.
$$

The bottom-left entry is

$$
(ac+cd)-(ac+cd)+0=0.
$$

The bottom-right entry is

$$
(bc+d^2)-(ad+d^2)+(ad-bc)=0.
$$

Thus

$$
\boxed{A^2-\operatorname{tr}(A)A+\det(A)I=0}.
$$

Part $$(B)$$. Now suppose $$\det(A)\ne 0$$. Rearrange the identity:

$$
A^2-\operatorname{tr}(A)A=-\det(A)I.
$$

Factor out $$A$$ on the left:

$$
A(A-\operatorname{tr}(A)I)=-\det(A)I.
$$

Multiply both sides by $$-\frac{1}{\det(A)}$$:

$$
A\left(\frac{\operatorname{tr}(A)I-A}{\det(A)}\right)=I.
$$

So

$$
A^{-1}=\frac{\operatorname{tr}(A)I-A}{\det(A)}.
$$

Since

$$
\operatorname{tr}(A)I-A
=
\begin{bmatrix}
a+d&0\\
0&a+d
\end{bmatrix}
-
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
=
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix},
$$

we get the usual inverse formula:

$$
\boxed{
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
}.
$$

Part $$(C)$$. From part $$(A)$$,

$$
A^2=\operatorname{tr}(A)A-\det(A)I.
$$

This already writes $$A^2$$ as a linear combination of $$A$$ and $$I$$.

Now multiply both sides by $$A$$:

$$
A^3=\operatorname{tr}(A)A^2-\det(A)A.
$$

Since $$A^2$$ is already a combination of $$A$$ and $$I$$, this means $$A^3$$ is also a combination of $$A$$ and $$I$$.

More generally, multiply the Cayley-Hamilton identity by $$A^{n-2}$$:

$$
A^n-\operatorname{tr}(A)A^{n-1}+\det(A)A^{n-2}=0.
$$

So

$$
A^n=\operatorname{tr}(A)A^{n-1}-\det(A)A^{n-2}.
$$

If $$A^{n-1}$$ and $$A^{n-2}$$ are both combinations of $$A$$ and $$I$$, then $$A^n$$ is too. Therefore every power $$A^n$$ with $$n\ge 2$$ can be written as

$$
\boxed{A^n=\alpha_n A+\beta_n I}.
$$

Part $$(D)$$. For

$$
M=\begin{bmatrix}2&1\\1&1\end{bmatrix},
$$

the trace is

$$
\operatorname{tr}(M)=3,
$$

and the determinant is

$$
\det(M)=2(1)-1(1)=1.
$$

So Cayley-Hamilton gives

$$
M^2-3M+I=0,
$$

or

$$
M^2=3M-I.
$$

Use the recurrence

$$
M^n=3M^{n-1}-M^{n-2}.
$$

Start:

$$
M^0=I,\qquad M^1=M.
$$

Then

$$
M^2=3M-I.
$$

Next,

$$
M^3=3M^2-M=3(3M-I)-M=8M-3I.
$$

Then

$$
M^4=3M^3-M^2=3(8M-3I)-(3M-I)=21M-8I.
$$

Next,

$$
M^5=3M^4-M^3=3(21M-8I)-(8M-3I)=55M-21I.
$$

Finally,

$$
M^6=3M^5-M^4=3(55M-21I)-(21M-8I)=144M-55I.
$$

Now substitute the matrix $$M$$:

$$
M^6=
144
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
-55
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

Thus

$$
M^6=
\begin{bmatrix}
288&144\\
144&144
\end{bmatrix}
-
\begin{bmatrix}
55&0\\
0&55
\end{bmatrix}
=
\boxed{
\begin{bmatrix}
233&144\\
144&89
\end{bmatrix}
}.
$$
:::
::::
