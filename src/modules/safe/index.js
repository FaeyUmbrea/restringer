module.exports = {
	consolidateNestedBlockStatements: require(__dirname + '/consolidateNestedBlockStatements'),
	normalizeComputed: require(__dirname + '/normalizeComputed'),
	normalizeEmptyStatements: require(__dirname + '/normalizeEmptyStatements'),
	parseTemplateLiteralsIntoStringLiterals: require(__dirname + '/parseTemplateLiteralsIntoStringLiterals'),
	removeDeadNodes: require(__dirname + '/removeDeadNodes'),
	replaceCallExpressionsWithUnwrappedIdentifier: require(__dirname + '/replaceCallExpressionsWithUnwrappedIdentifier'),
	replaceEvalCallsWithLiteralContent: require(__dirname + '/replaceEvalCallsWithLiteralContent'),
	replaceFunctionShellsWithWrappedValue: require(__dirname + '/replaceFunctionShellsWithWrappedValue'),
	replaceIdentifierWithFixedAssignedValue: require(__dirname + '/replaceIdentifierWithFixedAssignedValue'),
	replaceIdentifierWithFixedValueNotAssignedAtDeclaration: require(__dirname + '/replaceIdentifierWithFixedValueNotAssignedAtDeclaration'),
	resolveDeterministicIfStatements: require(__dirname + '/resolveDeterministicIfStatements'),
	resolveFunctionConstructorCalls: require(__dirname + '/resolveFunctionConstructorCalls'),
	resolveMemberExpressionReferencesToArrayIndex: require(__dirname + '/resolveMemberExpressionReferencesToArrayIndex'),
	resolveMemberExpressionsWithDirectAssignment: require(__dirname + '/resolveMemberExpressionsWithDirectAssignment'),
	resolveProxyReferences: require(__dirname + '/resolveProxyReferences'),
	resolveRedundantLogicalExpressions: require(__dirname + '/resolveRedundantLogicalExpressions'),
	unwrapFunctionShells: require(__dirname + '/unwrapFunctionShells'),
};