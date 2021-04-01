var index2Bkt = {0: "classifying_a_real_number", 1: "evaluating_algebraic_expressions", 2: "performing_calculations_using_the_order_of_operations", 3: "negative_exponent_rule", 4: "using_the_rules_of_exponents", 5: "using_scientific_notation", 6: "power_of_a_product_rule", 7: "power_of_a_quotient_rule", 8: "quotient_rule", 9: "product_rule", 10: "power_rule", 11: "zero_exponent_rule", 12: "evaluating_square_roots", 13: "using_rational_roots", 14: "multiplying_polynomials", 15: "expanding_polynomials", 16: "adding_and_subtracting_polynomials", 17: "factoring_a_perfect_square_trinomial", 18: "factoring_a_trinomial_with_leading_coefficient_1", 19: "factoring_a_sum_of_cubes", 20: "factoring_a_difference_of_cubes", 21: "factoring_the_greatest_common_factor_of_a_polynomial", 22: "factoring_by_grouping", 23: "factoring_a_difference_of_squares", 24: "factoring_polynomials", 25: "factoring_an_expression_with_fractional_or_negative_exponents", 26: "simplifying_complex_rational_expressions", 27: "rational_expressions", 28: "using_the_distance_formula", 29: "finding_x_intercepts_and_y_intercepts", 30: "the_rectangular_coordinate_systems_and_graphs", 31: "using_the_midpoint_formula", 32: "solving_linear_equations_in_one_variable", 33: "solving_a_rational_equation", 34: "determining_whether_graphs_of_lines_are_parallel_or_perpendicular", 35: "writing_the_equation_of_lines_parallel_or_perpendicular_to_a_given_line", 36: "finding_a_linear_equation", 37: "using_a_formula_to_solve_a_real_world_application", 38: "setting_up_a_linear_equation_to_solve_a_real_world_application", 39: "simplifying_powers_of_i", 40: "dividing_complex_numbers", 41: "expressing_square_roots_of_negative_numbers_as_multiples_of_i", 42: "adding_and_subtracting_complex_numbers", 43: "multiplying_complex_numbers", 44: "the_discriminant", 45: "solving_quadratics_with_a_leading_coefficient_of_1", 46: "using_the_quadratic_formula", 47: "solving_quadratic_equations_by_factoring", 48: "using_the_pythagorean_theorem", 49: "quadratic_equations", 50: "solving_a_quadratic_equation_by_factoring_when_the_leading_coefficient_is_not_1", 51: "rate", 52: "use_the_distance", 53: "solve_a_formula_for_a_specific_variable", 54: "using_the_properties_of_inequalities", 55: "solving_inequalities_in_one_variable_algebraically", 56: "solving_absolute_value_inequalities", 57: "understanding_compound_inequalities", 58: "using_interval_notation", 59: "determining_whether_a_relation_represents_a_function", 60: "determining_whether_a_function_is_one_to_one", 61: "finding_input_and_output_values_of_a_function", 62: "finding_domain_and_range_from_graphs", 63: "using_notations_to_specify_domain_and_range", 64: "finding_the_domain_of_a_function_defined_by_an_equation", 65: "finding_domains_and_ranges_of_the_toolkit_functions", 66: "graphing_piecewise_defined_functions", 67: "decreasing", 68: "using_a_graph_to_determine_where_a_function_is_increasing", 69: "finding_the_average_rate_of_change_of_a_function", 70: "use_a_graph_to_locate_the_absolute_maximum_and_absolute_minimum", 71: "or_constant", 72: "evaluating_composite_functions", 73: "decomposing_a_composite_function_into_its_component_functions", 74: "create_a_function_by_composition_of_functions", 75: "combining_functions_using_algebraic_operations", 76: "graphing_functions_using_vertical_and_horizontal_shifts", 77: "transformation_of_functions", 78: "performing_a_sequence_of_transformation", 79: "graphing_functions_using_reflections_about_the_axes", 80: "rates_of_change", 81: "determining_even_and_odd_functions", 82: "solving_an_absolute_value_equation", 83: "finding_and_evaluating_inverse_functions", 84: "finding_inverse_functions_and_their_graphs", 85: "verifying_that_two_functions_are_inverse_functions", 86: "inverse_functions"};

var bkt2Index = {"classifying_a_real_number":0,"evaluating_algebraic_expressions":1,"performing_calculations_using_the_order_of_operations":2,"negative_exponent_rule":3,"using_the_rules_of_exponents":4,"using_scientific_notation":5,"power_of_a_product_rule":6,"power_of_a_quotient_rule":7,"quotient_rule":8,"product_rule":9,"power_rule":10,"zero_exponent_rule":11,"evaluating_square_roots":12,"using_rational_roots":13,"multiplying_polynomials":14,"expanding_polynomials":15,"adding_and_subtracting_polynomials":16,"factoring_a_perfect_square_trinomial":17,"factoring_a_trinomial_with_leading_coefficient_1":18,"factoring_a_sum_of_cubes":19,"factoring_a_difference_of_cubes":20,"factoring_the_greatest_common_factor_of_a_polynomial":21,"factoring_by_grouping":22,"factoring_a_difference_of_squares":23,"factoring_polynomials":24,"factoring_an_expression_with_fractional_or_negative_exponents":25,"simplifying_complex_rational_expressions":26,"rational_expressions":27,"using_the_distance_formula":28,"finding_x_intercepts_and_y_intercepts":29,"the_rectangular_coordinate_systems_and_graphs":30,"using_the_midpoint_formula":31,"solving_linear_equations_in_one_variable":32,"solving_a_rational_equation":33,"determining_whether_graphs_of_lines_are_parallel_or_perpendicular":34,"writing_the_equation_of_lines_parallel_or_perpendicular_to_a_given_line":35,"finding_a_linear_equation":36,"using_a_formula_to_solve_a_real_world_application":37,"setting_up_a_linear_equation_to_solve_a_real_world_application":38,"simplifying_powers_of_i":39,"dividing_complex_numbers":40,"expressing_square_roots_of_negative_numbers_as_multiples_of_i":41,"adding_and_subtracting_complex_numbers":42,"multiplying_complex_numbers":43,"the_discriminant":44,"solving_quadratics_with_a_leading_coefficient_of_1":45,"using_the_quadratic_formula":46,"solving_quadratic_equations_by_factoring":47,"using_the_pythagorean_theorem":48,"quadratic_equations":49,"solving_a_quadratic_equation_by_factoring_when_the_leading_coefficient_is_not_1":50,"rate":51,"use_the_distance":52,"solve_a_formula_for_a_specific_variable":53,"using_the_properties_of_inequalities":54,"solving_inequalities_in_one_variable_algebraically":55,"solving_absolute_value_inequalities":56,"understanding_compound_inequalities":57,"using_interval_notation":58,"determining_whether_a_relation_represents_a_function":59,"determining_whether_a_function_is_one_to_one":60,"finding_input_and_output_values_of_a_function":61,"finding_domain_and_range_from_graphs":62,"using_notations_to_specify_domain_and_range":63,"finding_the_domain_of_a_function_defined_by_an_equation":64,"finding_domains_and_ranges_of_the_toolkit_functions":65,"graphing_piecewise_defined_functions":66,"decreasing":67,"using_a_graph_to_determine_where_a_function_is_increasing":68,"finding_the_average_rate_of_change_of_a_function":69,"use_a_graph_to_locate_the_absolute_maximum_and_absolute_minimum":70,"or_constant":71,"evaluating_composite_functions":72,"decomposing_a_composite_function_into_its_component_functions":73,"create_a_function_by_composition_of_functions":74,"combining_functions_using_algebraic_operations":75,"graphing_functions_using_vertical_and_horizontal_shifts":76,"transformation_of_functions":77,"performing_a_sequence_of_transformation":78,"graphing_functions_using_reflections_about_the_axes":79,"rates_of_change":80,"determining_even_and_odd_functions":81,"solving_an_absolute_value_equation":82,"finding_and_evaluating_inverse_functions":83,"finding_inverse_functions_and_their_graphs":84,"verifying_that_two_functions_are_inverse_functions":85,"inverse_functions":86}

export {index2Bkt, bkt2Index};