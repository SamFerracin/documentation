---
title: Qubit
description: API reference for qiskit.circuit.Qubit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Qubit
---

# Qubit

<span id="qiskit.circuit.Qubit" />

`qiskit.circuit.Qubit(register=None, index=None)`

Bases: [`Bit`](qiskit.circuit.Bit "qiskit.circuit.bit.Bit")

Implement a quantum bit.

Creates a qubit.

**Parameters**

*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – Optional. A quantum register containing the bit.
*   **index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.11)")) – Optional. The index of the bit in its containing register.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the provided register is not a valid [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")

## Attributes

<span id="qiskit.circuit.Qubit.index" />

### index

Get the index of an old-style bit in the register that owns it.

In modern Qiskit Terra (version 0.17+), bits are the fundamental object and registers are aliases to collections of bits. A bit can be in many registers depending on the circuit, so a single containing register is no longer a property of a bit. It is an error to access this attribute on bits that were not constructed as “owned” by a register.

<Admonition title="Deprecated since version 0.17" type="danger">
  The property `qiskit.circuit.bit.Bit.index` is deprecated as of qiskit-terra 0.17. It will be removed no earlier than 3 months after the release date. Instead, use `find_bit()` to find all the containing registers within a circuit and the index of the bit within the circuit.
</Admonition>

<span id="qiskit.circuit.Qubit.register" />

### register

Get the register of an old-style bit.

In modern Qiskit Terra (version 0.17+), bits are the fundamental object and registers are aliases to collections of bits. A bit can be in many registers depending on the circuit, so a single containing register is no longer a property of a bit. It is an error to access this attribute on bits that were not constructed as “owned” by a register.

<Admonition title="Deprecated since version 0.17" type="danger">
  The property `qiskit.circuit.bit.Bit.register` is deprecated as of qiskit-terra 0.17. It will be removed no earlier than 3 months after the release date. Instead, use `find_bit()` to find all the containing registers within a circuit and the index of the bit within the circuit.
</Admonition>
