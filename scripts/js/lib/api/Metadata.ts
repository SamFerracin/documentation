// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

export type ApiType =
  | "class"
  | "method"
  | "property"
  | "attribute"
  | "module"
  | "function"
  | "exception"
  | "data"
  | "struct"
  | "typedef"
  | "enum"
  | "enumerator";

export type Metadata = {
  apiName?: string;
  apiType?: ApiType;
  hardcodedFrontmatter?: string;
};
