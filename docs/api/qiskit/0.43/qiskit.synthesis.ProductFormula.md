---
title: ProductFormula
description: API reference for qiskit.synthesis.ProductFormula
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.synthesis.ProductFormula
---

# ProductFormula

<span id="qiskit.synthesis.ProductFormula" />

`ProductFormula(order, reps=1, insert_barriers=False, cx_structure='chain', atomic_evolution=None)`

Bases: [`EvolutionSynthesis`](qiskit.synthesis.EvolutionSynthesis "qiskit.synthesis.evolution.evolution_synthesis.EvolutionSynthesis")

Product formula base class for the decomposition of non-commuting operator exponentials.

[`LieTrotter`](qiskit.synthesis.LieTrotter "qiskit.synthesis.LieTrotter") and [`SuzukiTrotter`](qiskit.synthesis.SuzukiTrotter "qiskit.synthesis.SuzukiTrotter") inherit from this class.

**Parameters**

*   **order** (*int*) – The order of the product formula.
*   **reps** (*int*) – The number of time steps.
*   **insert\_barriers** (*bool*) – Whether to insert barriers between the atomic evolutions.
*   **cx\_structure** (*str*) – How to arrange the CX gates for the Pauli evolutions, can be “chain”, where next neighbor connections are used, or “fountain”, where all qubits are connected to one.
*   **atomic\_evolution** (*Callable\[\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli")  *|*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")*, float],* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")*] | None*) – A function to construct the circuit for the evolution of single Pauli string. Per default, a single Pauli evolution is decomopsed in a CX chain and a single qubit Z rotation.

## Methods

<span id="qiskit-synthesis-productformula-synthesize" />

### synthesize

<span id="qiskit.synthesis.ProductFormula.synthesize" />

`abstract ProductFormula.synthesize(evolution)`

Synthesize an `qiskit.circuit.library.PauliEvolutionGate`.

**Parameters**

**evolution** ([*PauliEvolutionGate*](qiskit.circuit.library.PauliEvolutionGate "qiskit.circuit.library.PauliEvolutionGate")) – The evolution gate to synthesize.

**Returns**

A circuit implementing the evolution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

## Attributes

<span id="qiskit.synthesis.ProductFormula.settings" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

**NotImplementedError** – If a custom atomic evolution is set, which cannot be serialized.
