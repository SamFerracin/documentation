---
title: RYYGate
description: API reference for qiskit.circuit.library.RYYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RYYGate
---

# RYYGate

<span id="qiskit.circuit.library.RYYGate" />

`qiskit.circuit.library.RYYGate(theta, label=None, *, duration=None, unit='dt')`[GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/standard_gates/ryy.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A parametric 2-qubit $Y \otimes Y$ interaction (rotation about YY).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`ryy()`](qiskit.circuit.QuantumCircuit#ryy "qiskit.circuit.QuantumCircuit.ryy") method.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Ryy(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
\newcommand{\rotationangle}{\frac{\theta}{2}}

R_{YY}(\theta) = \exp\left(-i \rotationangle Y{\otimes}Y\right) =
    \begin{pmatrix}
        \cos\left(\rotationangle\right) & 0 & 0 & i\sin\left(\rotationangle\right) \\
        0 & \cos\left(\rotationangle\right) & -i\sin\left(\rotationangle\right) & 0 \\
        0 & -i\sin\left(\rotationangle\right) & \cos\left(\rotationangle\right) & 0 \\
        i\sin\left(\rotationangle\right) & 0 & 0 & \cos\left(\rotationangle\right)
    \end{pmatrix}
$$

**Examples:**

> $$
> R_{YY}(\theta = 0) = I
> $$
>
> $$
> R_{YY}(\theta = \pi) = i Y \otimes Y
> $$
>
> $$
> R_{YY}\left(\theta = \frac{\pi}{2}\right) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1 & 0 & 0 & i \\
>                             0 & 1 & -i & 0 \\
>                             0 & -i & 1 & 0 \\
>                             i & 0 & 0 & 1
>                         \end{pmatrix}
> $$

Create new RYY gate.

## Attributes

<span id="qiskit.circuit.library.RYYGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.RYYGate.base_class "qiskit.circuit.library.RYYGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

This is often exactly equivalent to `type(obj)`, except in the case of singleton instances of standard-library instructions. These singleton instances are special subclasses of their base class, and this property will return that base. For example:

```python
>>> isinstance(XGate(), XGate)
True
>>> type(XGate()) is XGate
False
>>> XGate().base_class is XGate
True
```

In general, you should not rely on the precise class of an instruction; within a given circuit, it is expected that `Instruction.name` should be a more suitable discriminator in most situations.

<span id="qiskit.circuit.library.RYYGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.RYYGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RYYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RYYGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RYYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RYYGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RYYGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.RYYGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RYYGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RYYGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RYYGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RYYGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RYYGate.inverse" />

`inverse(annotated=False)`

Return inverse RYY gate (i.e. with the negative rotation angle).

**Parameters**

**annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – when set to `True`, this is typically used to return an `AnnotatedOperation` with an inverse modifier set instead of a concrete [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate"). However, for this class this argument is ignored as the inverse of this gate is always a [`RYYGate`](#qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate") with an inverted parameter value.

**Returns**

inverse gate.

**Return type**

[RYYGate](#qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate")

### power

<span id="qiskit.circuit.library.RYYGate.power" />

`power(exponent)`

Raise gate to a power.
