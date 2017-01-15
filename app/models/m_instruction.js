/*This file is part of Simulador de la Maquina Senzilla.

 Simulador de la Màquina Senzilla is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Simulador de la Màquina Senzilla is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Simulador de la Màquina Senzilla.  If not, see <http://www.gnu.org/licenses/>.*/


/**
 * Aquest model representa al registre d'instruccions de la màquina senzilla. 
 * Guardarem els valors del tipus d'operació (add, cmp, mov o beq) a més
 * de les adreces de l'operand font i destí.
 *
 * A més guardem el seu flag de control.
 */
define(['backbone', 'underscore'], function(Backbone){

    var Instruction = Backbone.Model.extend({

        defaults: {
            font: 0,                        /**< Adreça del operand font */
            desti: 0,                       /**< Adreça del operand desti */
            operacio: ["0","0"],            /**< Tipus de operacio codificada (add, mov, cmp, beq) */
            flag: "0"                       /**< Controlador del registre d'instruccions */
        }
    });
    return Instruction;
});