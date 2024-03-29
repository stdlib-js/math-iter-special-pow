/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var randu = require( '@stdlib/random-iter-randu' );
var pow = require( '@stdlib/math-base-special-pow' );
var linspace = require( '@stdlib/iter-linspace' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var iterPow = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterPow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an iterator protocol-compliant object or number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPow( value, randu() );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an iterator protocol-compliant object or number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPow( randu(), value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (iterator, iterator)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterPow( randu(), randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (iterator, scalar)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterPow( randu(), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (scalar, iterator)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterPow( 2.0, randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (scalar, scalar)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterPow( 2.0, 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the exponential function for each iterated value (iterator, iterator)', function test( t ) {
	var expected;
	var it;
	var N;
	var x;
	var y;
	var r;
	var i;

	N = 101;
	it = iterPow( linspace( 0.0, 2.0, N ), linspace( -3.14, 3.14, N ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	x = linspace( 0.0, 2.0, N );
	y = linspace( -3.14, 3.14, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = pow( x.next().value, y.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the exponential function for each iterated value (iterator, scalar)', function test( t ) {
	var expected;
	var it;
	var N;
	var x;
	var r;
	var i;

	N = 101;
	it = iterPow( linspace( -3.14, 3.14, N ), 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	x = linspace( -3.14, 3.14, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = pow( x.next().value, 2.0 );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the exponential function for each iterated value (scalar, iterator)', function test( t ) {
	var expected;
	var it;
	var N;
	var y;
	var r;
	var i;

	N = 101;
	it = iterPow( 2.0, linspace( -2.0, 2.0, N ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	y = linspace( -2.0, 2.0, N );
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = pow( 2.0, y.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which evaluates the exponential function for each iterated value (scalar, scalar)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterPow( 2.0, 2.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = {
		'value': pow( 2.0, 2.0 ),
		'done': false
	};
	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if provided a non-numeric value', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var r;
	var i;

	values = [ 'abc', null, true, false, [], {} ];
	expected = [
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterPow( array2iterator( values ), randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		r = expected[ i ].value;
		if ( r === r ) {
			t.equal( actual.value, r, 'returns expected value' );
		} else {
			t.notEqual( actual.value, actual.value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns a boolean' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterPow( randu(), randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterPow( randu(), randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});
