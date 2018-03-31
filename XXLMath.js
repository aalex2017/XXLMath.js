	// ФУНКЦИЯ-КОНСТРУКТОР БОЛЬШОГО ЧИСЛА

function XXLNumber(value_, usedNotation_, name_) {
	this.value = (value_ == undefined ? 0 : value_);
	this.usedNotation = (usedNotation_ == undefined ? this.defaultNotation : usedNotation_);
	this.name = name_;
	
	
	
	this._integer = [0];
	this._fraction = [0];
	this._isNegative = false;
	this._isZero = true;
	this._isOne = false;
	this._isInteger = true;
}





	// ПРОТОТИП ОБЪЕКТА БОЛЬШОГО ЧИСЛА
	
XXLNumber.prototype = {
	
	
	// Система записи числа по умолчанию
		//Сюда входят:
		//1. способ выделения целой и дробной частей и наоборот сбора числа из частей;
		//2. способ перевода числа в десятичную систему счисления и обратно
			//(могут быть написаны функции для непозиционных систем счисления или каких-либо выдуманных);
		//3. способ округления пятёрки;
		//4. способ чтения числа записанного в экспоненциальной форме и наоборот запись числа в такой форме;
		//5. способ распознавания отрицательного чилса;
		//6. шаблоны корректой записи
		
		//Всё это является условностями. Поэтому могут использоваться другие выдуманные
		//способы для выдуманных систем счисления.
	
	
	
	defaultNotation: {
		notationNumbers: {0: /juhj/},
		negativeTokens: {0: /-/},
		separators: {0: /,/},
		expNotations: {
			0: {
				expNotation: /asd/,
				negativeExp: {0: /dd/, 1: /s/}
			},
			
			1: {
				expNotation: /tyu/,
				negativeExp: {0: /dd/, 1: /s/}
			}			
		},
			
		'extract integer': function(x) {
			
			return '234'
		},
		
		'extract fraction': function(x) {
			
			
			return '123'
		},
		
		'join integer and fraction': function(a, b) {
			return 'jhgjhgj';
		},
		
		//'make negative': ,
		//'make positive': ,
		
		//'make exponential notation': ,
		//'make common notation': ,
		
		//'convert to decimal notation': ,
		
		//'make from decimal number'
		
				

		//'mantissa': 4,				
		//'characteristc of number': 4,
		//'exponent': 4,
		//'order of number': 4,
		//'order of number is negative': checkIfIsNegative(usedNotation.expNotations[p].expNotation.exec(value), negativeExp),

		'validation': {
			'value': function() {
			return "kjh";
			//// запятая единственная ошибка? пустой массив ошибка?
			},
			
			'used notation': function() {
				//{
				//notationNumbers: setValue(usedNotation.notationNumbers, this.defaultNotation.notationNumbers),
				
			
			},
			
			
			
			
		},
		
		

		checkIfIsSeparator: function(value, usedNotation) {
			for (var p in usedNotation.separators) {
				if (usedNotation.separators[p].test(value)) {
					return {
						'value has separator': true,
						'coincided property of used notation': p,
						'сoincided regExp': usedNotation.separators[p],
						'coincided value part': usedNotation.separators[p].exec(value),
						'value without separator': value.replace(usedNotation.separators[p],'')					
					};
				}
			}
				
			return false;
		},
		
		
		checkIfIsNegative: function(value, usedNotation) {
			for (var p in usedNotation.negativeTokens) {
				if(usedNotation.negativeTokens[p].test(value)) {
					return {
							'value is negative': true,
							'coincided property of used notation': p,
							'сoincided regExp': usedNotation.negativeTokens[p],
							'coincided value part': usedNotation.negativeTokens[p].exec(value),
							'value without negative token': value.replace(usedNotation.negativeTokens[p],'')
					};
				}
			}
			
			return false;
		},
	
	
		checkIfIsExpNotation: function(value, usedNotation) {
			for (var p in usedNotation.expNotations) {
				if (usedNotation.expNotations[p].expNotation.test(value)) {
					return {
						'value is in exponential notation': true,
						'coincided property of used notation': p,
						'сoincided regExp': usedNotation.expNotations[p].expNotation,
						'coincided value part': usedNotation.expNotations[p].expNotation.exec(value),
						'value in not exponential notation': value.replace(usedNotation.expNotations[p],'')
					};
				}
			}
				
			return false;
		},
	
	
		
		
		
		
		
		
			// Перевод целой части числа любой системы счисления в десятичную
		'to decimal integer': function(array = this.value, currentNotation = [8]) {
			var result = [0];
			// Получаем строку ,разбиваем строку на массив, меняем символы и получаем массив строк, каждую строку разбиваем, каждый элемент приводим к числу 
			for (var i = 0; i < array.length; i++) {
				var f = array[i].toString().split('');
				
				var s = XXLMath.exponention(currentNotation, (array.length - i - 1).toString().split(''));
				
				var d = XXLMath.multiplication(f, s);
				
				result = XXLMath.additionInteger(d, result);
				
				//result = array[i] * Math.pow(currentNotation, array.length - i - 1) + result;
			}
			return result.join('').toString(); // сначала приводим каждый элемент к строке, а потом объединяем. нет, возвращаем массив
		},
		
			// Перевод дробной части числа любой системы счисления в десятичную
		//'to decimal fraction': function(array, currentNotation) {
			//var result = 0;
			//for (var i = 0; i < array.length; i++) {
				//result = array[i] / Math.pow(currentNotation, i + 1) + result;
				//// result = array[i] / currentNotation ** (i + 1) + result;	// альтернативный вариант возведения в степень
			//}
			//return result;
		//},
		
		


			// Перевод целой части числа из десятичной системы счисления в любую другую

		fromDecimalInteger: function(decimalNumber, finalNotation) {
			var result = [];
			while (decimalNumber >= finalNotation) {
				result.unshift(decimalNumber % finalNotation);
				decimalNumber = (decimalNumber - decimalNumber % finalNotation) / finalNotation;
			}
			result.unshift(decimalNumber);
			return result;
		},
			
			
			// Перевод дробной части числа из десятичной системы счисления в любую другую

		fromDecimalFraction: function(decimalNumber, finalNotation, precision) {
			var result = [];
			while (decimalNumber > 0 && result.length < precision) {
				result.push(Math.floor(decimalNumber * finalNotation));
				decimalNumber = decimalNumber * finalNotation - Math.floor(decimalNumber * finalNotation);
			}
			return result;
		},

				
		
		
		
		
		
		// Замена символов недесятичной системы счисления на числа десятичной
		
		changeElementsToDecimal: function(array) {	// массив строк
			for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < currentNotationDatabase.length; j++) {
					if (array[i] == currentNotationDatabase[j]) {
						array[i] = j;
					}
				}
			}
			return array;	// массив десятичных чисел
		},
				
			
			// Замена чисел десятичной системы счисления на символы недесятичной
			
		changeElementsFromDecimal: function(array) {	// массив десятичных чисел
			for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < finalNotationDatabase.length; j++) {
					if (array[i] == j) {
						array[i] = finalNotationDatabase[j];
					}
				}
			}
			return array;	// массив строк
		},
		
		// precision:
		
		
		
		getNotation: function() {
		
			return 10
		},
	
		
		
		
		
	},
	
		
		
		
		
	// Методы объекта XXLNumber
		
	
	// по регулярному выражению
	getOrderOfNumber: function(string = this.value) {
		
		var result = []	
		var a = string.split('')
		for (var i = 0; i < a.length; i++) {
			if ( Number.isInteger(+a[i])) {
				result.push(+a[i]);
			}
		}
		result = +result.join('')
		
			
		return result;
	},
		
	getValue: function(string = this.value) {
	
		
		var result = []	
		var a = string.split('')
		for (var i = 0; i < a.length; i++) {
			if ( Number.isInteger(+a[i])) {
				result.push(+a[i]);
			}
		}
		result = +result.join('')
		
			
		return result;
	},
	
		
		
		// Определение того, является ли число безопасным целым
	isSafeInteger: function() {
		
		return true;
	},
	
	
	


		// Перевод числа в десятичную систему счисления
	toDecimal: function(x/*q = this.value,w =[8]*/) { // может быть строка
		//return this.usedNotation['to decimal integer'](q,w);
		return x
	},
	
	
	// Перевод числа в другую систему счисления
	
	toAnotherNotation: function(anotherNotation) {
		
		return this;
	},

		
		// Подготовка числа к математическим операциям
	'prepare XXLNumber for XXLMath': function(value = this.value) {
		this._isNegative = 4;
		this['integer part'] = this.extractInteger();
		this['integer part'] = this.toDecimal().split('');
		
		
		this['fraction part'] = this.extractFraction().split('');
		
		
		// 3. перевод в десятичную 
		// 4. создание массивов чисел
		
		
		//var result = this.toDecimal(value).split('');
		//for (var i = 0; i < result.length; i++) {
			//result[i] = +result[i];
		//}
		
		return this;
	},
	
	// Выделение целой части числа
	extractInteger: function(x = this.value) {
		return this.usedNotation['extract integer'](x);
	},
		
	// Выделение дробной части числа
	
	extractFraction: function(x = this.value) {
		return this.usedNotation['extract fraction'](x);
	},
	
	
	// Определение количества разрядов в дробной части числа
	
	countFractionDigits: function(X) {	// массив чисел
		var X2 = this.extractFraction(X).slice();
		return X2.length; // число	
	},

	
	
	
	// Определение того, есть ли в числе разделитель целой и дробной частей
	
	findSeparator: function(X) {
		var isSeparator = false;
		for (var i = 0; i < X.length; i++) {
			if (X[i] == this.separatorFinalNotation) {
				isSeparator = true;
				return isSeparator;
			}
		}
		return isSeparator;
	},
	
		
	
	
	
	
	setInteger: function(a) {
		this.integer = a;
		this.fraction = this.integer + 10;
	
		this.valueInDecimal = this.fraction + 20;
		console.log(this.integer)
	},
	
	
	
	
	
	
	
	
	
	
	
	
	factorial: function() {
		// Добавить частные случаи
		
		
		var result = new XXLNumber(0, this.usedNotation);
		result._integer = [1];
		
		var factor = new XXLNumber();
		factor._integer = [1];
		
		while (XXLMath._compareInteger(factor._integer, this._integer) != 1) {
			result._integer = XXLMath._multiplyArrayByArray(result._integer, factor._integer);
			factor._integer = XXLMath._sumInteger(factor._integer, [1], 0)
		}
		
		return result;
	},
	
	
	// Удаление нулей в начале целой части числа
	
	_removeStartZeroFromInteger: function(array) {
		XXLMath._removeStartZero(array);
		
		if (array.length == 0) {
			array = [0];
		}
		
		return array;
	},
	
	
	// Удаление нулей в конце дробной части числа
	
	_removeEndingZeroFromFraction: function(array) {
		var result = array.slice();
		
		while (result[result.length - 1] == 0) {
			result.pop();
		}
		
		if (result.length == 0) {
			result = [0];
		}
		
		return result;
	},
	
	
	// Проверка того, является ли число целым
	
	isInteger: function() {
			
			
		return isInteger;
	},
	
	
	// Проверка того, является ли число отрицательным
	
	isNegative: function() {
		
		
		return;	
	},
	
	
	
	
	
	
	// Сокращение десятичной дроби

	toSimpleFraction: function() {
		var numerator = this._fraction;
		var denominator = new Array(this._fraction.length);
		
		for (var i = 0; i < denominator.length; i++) {
			denominator[i] = 0;
		}
		denominator.unshift(1);
		
		while (numerator[numerator.length - 1] % 5 == 0 && denominator[denominator.length - 1] % 5 == 0) {
			numerator = XXLMath._divideInteger(numerator, [5]).integer;
			denominator = XXLMath._divideInteger(denominator, [5]).integer;
		}
		
		while (numerator[numerator.length - 1] % 2 == 0 && denominator[denominator.length - 1] % 2 == 0) {
			numerator = XXLMath._divideInteger(numerator, [2]).integer;
			denominator = XXLMath._divideInteger(denominator, [2]).integer;
		}
		
		var numeratorOfImproperFraction = XXLMath._sumInteger(numerator,
		XXLMath._multiplyArrayByArray(denominator, this._integer), 0)
		
		var a = new XXLNumber(0, this.usedNotation);
a._integer = this._integer;
XXLMath._removeStartZero(a._integer)
		
		var b = new XXLNumber(0, this.usedNotation);
b._integer = numerator;
XXLMath._removeStartZero(b._integer)
		
		var c = new XXLNumber(0, this.usedNotation);
c._integer = denominator;
XXLMath._removeStartZero(c._integer)		
		
		var d = new XXLNumber(0, this.usedNotation);
d._integer = numeratorOfImproperFraction;
XXLMath._removeStartZero(d._integer)
		
		return {'integer': a, 'numerator': b, 'denominator': c, 'numerator of improper fraction': d};
	},
	
	
	// Удаление разделителя целой и дробной частей
	
	_removeSeparator: function() {
		this._withoutSeparator = this._integer.concat(this._fraction);
		
		return this;
	},
	
	
	// Установка разделителя целой и дробной частей
	
	_setSeparator: function(i) {
		var tempWithoutSeparator = this._withoutSeparator.slice();
		
		this._fraction = tempWithoutSeparator.splice(-i, i);;
		this._integer = tempWithoutSeparator;
		
		return this;
	},
	
	
	// Смещение разделителя целой и дробной частей вправо
	
	_shiftSeparatorRight: function(i) {
		var tempFraction = this._fraction.slice();
		
		while (i > tempFraction.length) {
			tempFraction.push(0);
		}
		
		var shiftedPart = tempFraction.splice(0, i);
		var tempInteger = this._integer.concat(shiftedPart);
		
this._alteredInteger = this._removeStartZeroFromInteger(tempInteger);
this._alteredFraction = this._removeEndingZeroFromFraction(tempFraction);
		
		return this;
	},
	
	
	// Смещение разделителя целой и дробной частей влево
	
	_shiftSeparatorLeft: function(i) {
		var tempInteger = this._alteredInteger.slice();
		
		while (i > tempInteger.length) {
			tempInteger.unshift(0);
		}
		
		var shiftedPart = tempInteger.splice(-i, i);
		var tempFraction = shiftedPart.concat(this._alteredFraction);
		
this._integer = this._removeStartZeroFromInteger(tempInteger);
this._fraction = this._removeEndingZeroFromFraction(tempFraction);
		
		return this;
	},
	
	
	// Проверка того, записано ли число в экспоненциальной форме
	
	isExponentialNotation: function(x = this) {
		if (typeof(x) == 'string' || typeof(x) == 'number') {
			var string = x.toString();
		}
		else {
			var string = this.value;
		}
		
		for (var p in this.usedNotation.expNotations) {
			var regExp = this.usedNotation.expNotations[p].expNotation;
			if (regExp.test(string)) {
				return true;
			}
		}
		
		return false;
	},
	
	
	// Получение значения точности
	
	_getPrecision: function(stringOrNumber) {
		var string = stringOrNumber.toString();
		if (this.isExponentialNotation(string)) {
			var number = this.getOrderOfNumber(string);
		}
		else {
			var number = this.getValue(string);
		}
		
		return +this.toDecimal(number);
	},
	
	
	// Округление
	
	round: function(precision_ = 10) {
		var roundedDigits = this._getPrecision(precision_);
		
		if (roundedDigits == 0) {
			return this._roundToInteger();
		}
		
		if (this.isExponentialNotation(precision_)) {
			this._fraction = [0];
			return this._roundInteger(roundedDigits);
		}
	
		return this._roundFraction(roundedDigits);
	},	
	
	
	// Округление до целого
	
	_roundToInteger: function() {
		if (this._fraction[0] >= 5) {
			this._integer = XXLMath._sumInteger(this._integer, [1], 0)		
		}
		
		this._fraction = [0];
		
		return this;
	},
	
	
	// Округление дробной части	
	
	_roundFraction: function(i) {	// i знаков оставить в дробной части
		if (this._fraction[i] >= 5) {
			this._fraction.splice(i, this._fraction.length - i);
			
			var one = new XXLNumber();
			one._fraction = new Array(i);
			one._integer = [0];
			
			for (var j = 0; j < one._fraction.length - 1; j++) {
				one._fraction[j] = 0;
			}
			
			one._fraction[one._fraction.length - 1] = 1;
			var sign = this._isNegative;
			this._isNegative = false;
			var rounded = XXLMath.sum(this, one);
			this._isNegative = sign;
			
			this._integer = rounded._integer;
			this._fraction = rounded._fraction;
			
			return this;
		}
		
		this._fraction.splice(i, this._fraction.length - i);
// Удаление нулей в конце
		return this;
	},
	
	
	// Округление целой части
	
	_roundInteger: function(i) {	// i знаков поменять на 0 в конце целой части
		if (this._integer[this._integer.length - i] >= 5) {
			this._replaceDigitsByZeroFromTheEnd(i);
			
			var one = new XXLNumber();
			one._integer = new Array(i + 1);
			one._replaceDigitsByZeroFromTheEnd(i + 1);
			one._integer[0] = 1;
			
			this._integer = XXLMath._sumInteger(this._integer, one._integer, 0);
			
			return this;
		}
		
		this._replaceDigitsByZeroFromTheEnd(i);
		
		return this;
	},
	
	
	// Замена разрядов целой части с конца на нули при округлении
	
	_replaceDigitsByZeroFromTheEnd: function(i) {
		for (var j = 0; j < i && j < this._integer.length; j++) {
			this._integer[this._integer.length - 1 - j] = 0;
		}
	},
	
	
	// Проверка того, является ли число нулём
	
	_isZero: function() {
		if (this._integer.length == 1 && this._integer[0] == 0 && this._fraction.length == 1 && this._fraction[0] == 0) {
			return true;
		}
		
		return false;
	},
	
	
	// Проверка того, является ли число единицей
	
	_isOne: function() {
		if (this._integer.length == 1 && this._integer[0] == 1 && this._fraction.length == 1 && this._fraction[0] == 0) {
			return true;
		}
		
		return false;
	},
	
};





	// НАБОР ОПЕРАЦИЙ НАД ОБЪЕКТАМИ БОЛЬШИХ ЧИСЕЛ

var XXLMath = {
	
	
	// Сравнение

	compare: function(x, y) {
		var tempResult = this._compareSign(x, y);
		if (tempResult == 0) {
			var z = y;
			y = x;
			x = z;
		}
		else if (tempResult == 1 || tempResult == -1) {
			return tempResult;
		}
		
		tempResult = this._compareInteger(x._integer, y._integer);
		if (tempResult != 0) {
			return tempResult;
		}
		
		tempResult = this._compareFraction(x._fraction, y._fraction)
		if (tempResult != 0) {
			return tempResult;
		}
			
		return 0;
	},
	
	
	// Сравнение знаков
	
	_compareSign: function(x, y) {
		if (x._isNegative && y._isNegative) {
			return 0;
		} 
		else if (x._isNegative) {
			return -1;
		}
		else if (y._isNegative) {
			return 1;
		}
	},
	
	
	// Сравнение целых частей
	
	_compareInteger: function(x, y) {	// массивы чисел
		if (x.length > y.length) {
			return 1;
		}
		if (x.length < y.length) {
			return -1;
		}
		if (x.length == y.length) {
			for (var i = 0; i < x.length; i++) {
				if (x[i] > y[i]) {
					return 1;
				}
				if (x[i] < y[i]) {
					return -1;
				}
			}
		}
		
		return 0;		
	},
	
	
	// Сравнение дробных частей
	
	_compareFraction: function(x, y) {	// массивы чисел
		var arrMin = (x.length > y.length) ? y : x;
		while (x.length != y.length) {
			arrMin.push(0);
		}
		for (var i = 0; i < arrMin.length; i++) {
			if (x[i] > y[i]) {
				return 1;
			}
			if (x[i] < y[i]) {
				return -1;
			}
		}
		
		return 0;		
	},
	
	
	// Сложение
	
	sum: function(x, y, precision_, usedNotation_) {
		var result = new XXLNumber(0, usedNotation_);
		result._isNegative = false;
		
		if (x._isNegative && y._isNegative) {
			x._isNegative = false;
			y._isNegative = false;
			result._isNegative = true;
		}
		else if (x._isNegative) {
			x._isNegative = false;
			return this.subtract(y, x);
		}
		else if (y._isNegative) {
			y._isNegative = false;
			return this.subtract(x, y);
		}
	
		var sumFractionResults = this._sumFraction(x._fraction, y._fraction);
		result._fraction = sumFractionResults.fraction;
		result._integer = this._sumInteger(x._integer, y._integer, sumFractionResults.digitFromFraction);
		
		if (precision_ != undefined) {
			result.round(precision_);
		}
		
		return result;
	},
	
	
	// Сложение целых частей
	
	_sumInteger: function(x, y, digitFromFraction) {	// массивы чисел
		var result = [];
		var toNextDigit = 0;
		
		var arrMin = (x.length > y.length) ? y : x;
		var arrMax = (x.length <= y.length) ? y : x;
		
		for (var i = 0; i < arrMin.length; i++) {
			if (arrMin[arrMin.length - i - 1] + arrMax[arrMax.length - i - 1] + toNextDigit + digitFromFraction > 9) {
				result.unshift(arrMin[arrMin.length - i - 1] + arrMax[arrMax.length - i - 1] + toNextDigit + digitFromFraction - 10);
				toNextDigit = 1;
			}
			else {
				result.unshift(arrMin[arrMin.length - i - 1] + arrMax[arrMax.length - i - 1] + toNextDigit + digitFromFraction);
				toNextDigit = 0;
			}	
		}
		
		if (toNextDigit == 1 && arrMin.length == arrMax.length) {
			result.unshift(1);
		}
		
		else if (toNextDigit == 0 && arrMin.length != arrMax.length) {
			for (var i = 0; i < arrMax.length - arrMin.length; i++) {
				result.unshift(arrMax[arrMax.length - arrMin.length - i - 1]);
			}
		}
		
		else if (toNextDigit == 1 && arrMin.length != arrMax.length) {
			for (var i = 0; i < arrMax.length - arrMin.length; i++) {
				if (arrMax[arrMax.length - arrMin.length - i - 1] + toNextDigit > 9) {			
					result.unshift(arrMax[arrMax.length - arrMin.length - i - 1] + toNextDigit - 10);
					toNextDigit = 1;
				}
				else {
					result.unshift(arrMax[arrMax.length - arrMin.length - i - 1] + toNextDigit);
					toNextDigit = 0;
				}
			}
			if (toNextDigit == 1) {
				result.unshift(1);
			}
		}
		
		return result;	// массив чисел
	},
	
	
	// Сложение дробных частей

	_sumFraction: function(x, y) {	// массивы чисел
		var result = [];
		var toNextDigit = 0;
		var digitFromFraction = 0;
		
		var arrMin = (x.length > y.length) ? y : x;
		var arrMax = (x.length <= y.length) ? y : x;
		
		for (var i = 0; i < arrMin.length; i++) {
			if (arrMin[arrMin.length - i - 1] + arrMax[arrMin.length - i - 1] + toNextDigit > 9) {
				result.unshift(arrMin[arrMin.length - i - 1] + arrMax[arrMin.length - i - 1] + toNextDigit - 10);
				toNextDigit = 1;
			}
			else {
				result.unshift(arrMin[arrMin.length - i - 1] + arrMax[arrMin.length - i - 1] + toNextDigit);
				toNextDigit = 0;
			}
		}
		
		for (var i = 0; i < arrMax.length - arrMin.length; i++) {
			result.push(arrMax[arrMin.length + i]);
		}
	
		if (toNextDigit == 1) {
			digitFromFraction = 1;
		}
		
		return {'fraction': result, 'digitFromFraction': digitFromFraction};
	},


	// Вычитание, x - y
	
	subtract: function(x, y, precision_, usedNotation_) {
		var result = new XXLNumber(0, usedNotation_);
		result._isNegative = false;
		
		if (x._isNegative && y._isNegative) {
			x._isNegative = false;			
			y._isNegative = false;
			
			if (this.compare(x, y) == -1) {
				var z = y;
				y = x;
				x = z;
			}
			else if (this.compare(x, y) == 1) {
				result._isNegative = true;
			}
		}
		else if (x._isNegative) {
			x._isNegative = false;
			result = this.sum(x, y);
			result._isNegative = true;
			return result;
		}
		else if (y._isNegative) {
			y._isNegative = false;
			result = this.sum(x, y);
			return result;
		}
	
		var subtractFractionResults = this._subtractFraction(x._fraction, y._fraction);
		result._fraction = subtractFractionResults.fraction;
		result._integer = this._subtractInteger(x._integer, y._integer, subtractFractionResults.digitFromFraction);
		
		if (precision_ != undefined) {
			result.round(precision_);
		}
		
		return result;
	},
	

	// Вычитание целых частей, x - y 

	_subtractInteger: function(x, y, digitFromFraction) {	// массивы чисел
		var result = [];
		var toNextDigit = 0;
		
		for (var i = 0; i < y.length; i++) {
			if (x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit - digitFromFraction < 0) {
				result.unshift(x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit - digitFromFraction + 10);
				toNextDigit = 1;
			}
			else {
				result.unshift(x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit - digitFromFraction);
				toNextDigit = 0;
			}
		}
	
		if (toNextDigit == 0 && y.length != x.length) {
			for (var i = 0; i < x.length - y.length; i++) {
				result.unshift(x[x.length - y.length - i - 1]);
			}
		}
		
		else if (toNextDigit == 1 && y.length != x.length) {
			for (var i = 0; i < x.length - y.length; i++) {
				if (x[x.length - y.length - i - 1] - toNextDigit < 0) {			
					result.unshift(x[x.length - y.length - i - 1] - toNextDigit + 10);
					toNextDigit = 1;
				}
				else {
					result.unshift(x[x.length - y.length - i - 1] - toNextDigit);
					toNextDigit = 0;
				}
			}
		}
		
		return result;	// массив чисел
	},


	// Вычитание дробных частей, x - y

	_subtractFraction: function(x, y) {	// массивы чисел
		var result = [];
		var toNextDigit = 0;
		var digitFromFraction = 0;
		
		var arrMin = (x.length > y.length) ? y : x;
		
		while (x.length != y.length) {
			arrMin.push(0);
		}	
		
		for (var i = 0; i < arrMin.length; i++) {
			if (x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit < 0) {
				result.unshift(x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit + 10);
				toNextDigit = 1;
			}
			else {
				result.unshift(x[x.length - i - 1] - y[y.length - i - 1] - toNextDigit);
				toNextDigit = 0;
			}
		}	
		
		if (toNextDigit == 1) {
			digitFromFraction = 1;
		}
		
		return {'fraction': result, 'digitFromFraction': digitFromFraction};;
	},
	

	// Умножение

	multiply: function(x, y, precision_, usedNotation_) {
		var result = new XXLNumber(0, usedNotation_);
		this._setSign(x, y, result);
x._removeSeparator();
y._removeSeparator();

		result._withoutSeparator = this._multiplyArrayByArray(x._withoutSeparator, y._withoutSeparator);
result._setSeparator(x._fraction.length + y._fraction.length);
		
		if (precision_ != undefined) {
			result.round(precision_);
		}
		
		return result;
	},
	
	
	// Умножение массива на массив
	
	_multiplyArrayByArray: function(x, y) {
		var arrMin = (x.length > y.length) ? y : x;
		var arrMax = (x.length <= y.length) ? y : x;
		
		var subArr1 = [0];

		for (var i = 0; i < arrMin.length; i++) {
			var number = arrMin[arrMin.length - i - 1];
			var subArr2 = this._multiplyByNumber(arrMax, number);
			
			for (var j = 1; j <= i; j++){
				subArr2.push(0);
			}
			
			subArr1 = this._sumInteger(subArr1, subArr2, 0);
		}
		
		return subArr1;
	},
	
	
	// Умножение массива на число
	
	_multiplyByNumber: function(array, number) {
		var result = array.slice();
		if (number == 0) {
			result = [0];
		}
		
		for (var i = 1; i < number; i++) {	
			result = this._sumInteger(result, array, 0);
		}
		
		return result;
	},
	
	
	// Установить знак для операций умножения и деления

	_setSign: function(x, y, result) {
		if (x._isNegative && !y._isNegative || y._isNegative && !x._isNegative) {
			result._isNegative = true;
		}
		
		x._isNegative = false;
		y._isNegative = false;
	},
	
	
	// Деление
	
	divide: function(x, y, precision_ = 10, usedNotation_) {
x._shiftSeparatorRight(y._fraction.length);
y._removeSeparator();

		var specialCase = this._specialCasesOfDivision(x, y);
		
		if (specialCase != undefined) {
			return specialCase;
		}
	
		var result = new XXLNumber(0, usedNotation_);
		this._setSign(x, y, result);
		
		var divideIntegerResults = this._divideInteger(x._alteredInteger, y._withoutSeparator);
		result._integer = divideIntegerResults.integer;
		
		var precisionValue = result._getPrecision(precision_);
		
		if (!result.isExponentialNotation(precision_)) {
			result._fraction = this._divideFraction(x._alteredFraction, y._withoutSeparator,
			divideIntegerResults.remainder, precisionValue + 1);
		}

		result.round(precision_);
		
		return result;
	},
	
	
	// Целочисленное деление (нахождение неполного частного)
	
	incompleteQuotient: function(x, y, precision_ = 0, usedNotation_) {
x._shiftSeparatorRight(y._fraction.length);
y._removeSeparator();

		var specialCase = this._specialCasesOfDivision(x, y);
		
		if (specialCase != undefined) {
			return specialCase;
		}
		
		var result = new XXLNumber(0, usedNotation_);
		this._setSign(x, y, result);
		
		var divideIntegerResults = this._divideInteger(x._alteredInteger, y._withoutSeparator);
		result._integer = divideIntegerResults.integer;
		
		result.round(precision_);
	
		return result;
	},
	
	
	// Взятие остатка от деления
	
	remainder: function(x, y, precision_ = 10, usedNotation_) {
		if (y._isZero) {
			return NaN;
		}
		
x._shiftSeparatorRight(y._fraction.length);
y._removeSeparator();
		
		var result = new XXLNumber();	
		result._isNegative = x._isNegative;
		x._isNegative = false;
		y._isNegative = false;
		
		var divideIntegerResults = this._divideInteger(x._alteredInteger, y._withoutSeparator);	
		result._alteredInteger = divideIntegerResults.remainder;
		result._alteredFraction = x._alteredFraction;
		result._shiftSeparatorLeft(y._fraction.length);
		
		result.round(precision_);
	
		return result;
	},
	
	
	// Частные случаи деления
	
	_specialCasesOfDivision: function(x, y) {
		if (x._isZero && y._isZero) {
			return NaN;
		}
		if (y._isZero && y._isNegative && x._isNegative || y._isZero && !y._isNegative && !x._isNegative) {
			return Infinity;
		}
		if (y._isZero && y._isNegative && !x._isNegative || y._isZero && !y._isNegative && x._isNegative) {
			return -Infinity;
		}
	},
	

	// Определение целой части частного от деления
	
	_divideInteger: function(x, y) {	// массивы чисел
		var result = [];
		var tempX = [];
		
		for (var i = 0; i < x.length; i++) {
			tempX.push(x[i]);
			
			tempX = this._getOneDigitOfQuotient(y, tempX, result);
		}
		
		return {'integer': result, 'remainder': tempX};
	},

	
	// Определение дробной части частного от деления
	
	_divideFraction: function(x, y, remainder, precisionFraction) {	// массивы чисел и число
		var result = [];
		var tempX = remainder.slice();
		
		for (var i = 0; result.length < precisionFraction; i++) {
			if (x[i] == undefined && tempX.length == 0) {
				break;
			}
			
			x[i] == undefined ? tempX.push(0) : tempX.push(x[i]);
			
			tempX = this._getOneDigitOfQuotient(y, tempX, result);
		}
		
		return result;
	},
	
	
	// Нахождение одного разряда в частном
	
	_getOneDigitOfQuotient: function(y, tempX, result) {
		var result_i = 0;
		var multiY = y;
		var residual = this._compareInteger(tempX, y);
		
		if (residual == -1) {
			result.push(0);
			
			this._removeStartZero(tempX);
			return tempX;
		}
		
		while (residual != -1) {
			result_i++;
			multiY = this._sumInteger(y, multiY, 0);
			residual = this._compareInteger(tempX, multiY);
		}
		
		multiY = this._multiplyByNumber(y, result_i);
		this._compareInteger(tempX, multiY) == 0 ? tempX = [] : tempX = this._subtractInteger(tempX, multiY, 0);
		
		this._removeStartZero(tempX);
		result.push(result_i);
		
		return tempX;
	},


	// Удаление нулей в начале массива
	
	_removeStartZero: function(array) {
		while (array[0] == 0) {
			array.shift();
		}
	},
	

	// Возведение в степень

	pow: function(x, y, precision_, usedNotation_) {
		var specialCase = this._specialCasesOfPow(x, y, usedNotation_);
		
		if (specialCase != undefined) {
			return specialCase;
		}
		
		var result = new XXLNumber(0, usedNotation_);
		
		if (result.isExponentialNotation(precision_)) {
			var tempPrecision = 0;
		}
		else {
			var tempPrecision = result._getPrecision(precision_);
		}
		
		if (!y._isNegative && y._isInteger) { 
			result = this._toThePowerOfInteger(x, y, usedNotation_);
		}
		else if (!y._isNegative && !y._isInteger) { 
			result =  this._toThePowerOfFraction(x, y, tempPrecision, usedNotation_);
		}
		else if (y._isNegative && y._isInteger) { 
			result = this._toThePowerOfNegativeInteger(x, y, precision_, usedNotation_);
		}
		else if (y._isNegative && !y._isInteger) { 
			result = this._toThePowerOfNegativeFraction(x, y, tempPrecision, usedNotation_); 
		}
		
		result.round(precision_);
		
		return result;
	},
	
	
	// Частные случаи возведения в степень
	
	_specialCasesOfPow: function(x, y, usedNotation) {
		if (y._isZero) {
			return new XXLNumber(1, undefined, one).toAnotherNotation(usedNotation);
		}
		
		if (x._isZero && !x._isNegative && !y._isNegative) {
			return new XXLNumber(0, undefined, zero).toAnotherNotation(usedNotation);
		}
		
		if (x._isZero && x._isNegative && !x._isInteger && !y._isNegative) {
			return new XXLNumber(0, undefined, zero).toAnotherNotation(usedNotation);
		}
		
	},
	
	
	// Возведение в степень с целым положительным показателем
	
	_toThePowerOfInteger: function(x, y, usedNotation_) {
		var result = x;
		var tempExponent = [1];
		
		while (this._compareInteger(y._integer, tempExponent) == 1) {
			result = this.multiply(x, result, undefined, usedNotation_);
			tempExponent = this._sumInteger(tempExponent, [1], 0);
		}
		
		return result;
	},
	
	
	// Возведение в степень с целым отрицательным показателем
	
	_toThePowerOfNegativeInteger: function(x, y, precision, usedNotation_) {
		var one = new XXLNumber(1);
one._integer = [1];
		var denominator = this._toThePowerOfInteger(x, y, usedNotation_)
		
		return this.divide(one, denominator, precision, usedNotation_);
	},
	
	
	// Возведение в степень с дробным положительным показателем
	
	_toThePowerOfFraction: function(x, y, tempPrecision, usedNotation_) {
		var simpleFraction = y.toSimpleFraction();
		var firstMultiplier = this._toThePowerOfInteger(x, simpleFraction.integer, usedNotation_);
		var secondMultiplier = this._toThePowerOfInteger(x, simpleFraction.numerator);
		secondMultiplier = this.root(secondMultiplier, simpleFraction.denominator, tempPrecision + firstMultiplier._integer.length);
		
		return this.multiply(firstMultiplier, secondMultiplier, tempPrecision);
	},
	
	
	// Возведение в степень с дробным отрицательным показателем
	
	_toThePowerOfNegativeFraction: function(x, y, tempPrecision, usedNotation_) {
		var one = new XXLNumber(1);
one._integer = [1];
		var denominator = this._toThePowerOfFraction(x, y, tempPrecision, usedNotation_);
		
		return this.divide(one, denominator, tempPrecision, usedNotation_);
	},
	
	
	// Извлечение корня
	
	root: function(x, y, precision_ = 10, usedNotation_) {
				
//x._removeSeparator();
		
		
		if (y._isInteger) {
			
		}
		
		var result = new XXLNumber(0, usedNotation_);
		
		res = this._rootInteger(x, y)._integer;
		
		
		
		var precisionValue = result._getPrecision(precision_);
		
		if (!result.isExponentialNotation(precision_)) {
			
			result = this._rootFraction(x, y, res, precisionValue + 1);		
		}

		//result.round(precision_);
		
		
		return result;
	},
	
	
	// Извлечение целого корня

	_rootInteger: function(x, y) {
		var result = new XXLNumber();
		result._integer = [1];
		result._fraction = [0];
		
		var tempX = new XXLNumber();
		
		while (this.compare(x, tempX) != -1) {
			result._integer = this._sumInteger(result._integer, [1], 0);
			tempX = this._toThePowerOfInteger(result, y);
		}
		
		result._integer = this._subtractInteger(result._integer, [1], 0);
		
		return result;
	},


	// Извлечение дробного корня

	_rootFraction: function(x, y, _rootInteger, precisionFraction) {
		var result = new XXLNumber();
		result._integer = _rootInteger.slice();
		
		for (var i = 0; result._fraction.length <= precisionFraction; i++) {
			
			for (var j = 0; j <= 9; j++) {
				result._fraction[i] = j;
				
				var resultToThePowerOfY = this._toThePowerOfInteger(result, y);
			
				if (this.compare(resultToThePowerOfY, x) == 0) {
					result._fraction[i] = j;
					return result;
				}
			
				if (this.compare(resultToThePowerOfY, x) == 1) {
					j--;
					result._fraction[i] = j;
					break;
				}
			}			
		}
		
		return result;
	},
	
};

