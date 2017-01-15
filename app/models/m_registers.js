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
 * Model que representa als dos registres A i B que corresponen
 * als registres dels operands font i destí.
 *
 */
define(['backbone', 'underscore'], function(Backbone){

    var Registers = Backbone.Model.extend({

        defaults: {
            MflagA : "0",       /**< El valor del controlador del registre A. */
            dataA: "0",         /**< El valor del registre A. */

            MflagB: "0",        /**< El valor del controlador del registre B */
            dataB: "0"          /**< El valor del registre B. */
        }
    });
    return Registers;
});