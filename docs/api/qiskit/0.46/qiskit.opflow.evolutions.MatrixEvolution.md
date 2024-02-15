---
title: MatrixEvolution
description: API reference for qiskit.opflow.evolutions.MatrixEvolution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.MatrixEvolution
---

# MatrixEvolution

<span id="qiskit.opflow.evolutions.MatrixEvolution" />

`qiskit.opflow.evolutions.MatrixEvolution`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/opflow/evolutions/matrix_evolution.py "view source code")

Bases: [`EvolutionBase`](qiskit.opflow.evolutions.EvolutionBase "qiskit.opflow.evolutions.evolution_base.EvolutionBase")

Deprecated: Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.matrix_evolution.MatrixEvolution` is deprecated as of qiskit-terra 0.24.0. It will be removed in the Qiskit 1.0 release. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

## Methods

### convert

<span id="qiskit.opflow.evolutions.MatrixEvolution.convert" />

`convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. This is done by converting the `EvolvedOp.primitive` to a `MatrixOp` and simply calling `.exp_i()` on that.

**Parameters**

**operator** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The Operator to convert.

**Returns**

The converted operator.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")
