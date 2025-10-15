class MiniMaple{
    static differentiate(input, variable) {
        if (!input || !variable) return '0';
        
        const terms = this.parseExpression(input);
        let result = '';
        
        for (const term of terms) {
            const derivative = this.differentiateTerm(term, variable);
            if (derivative) {
                if (result && derivative.coefficient > 0) {
                    result += '+';
                }
                result += this.termToString(derivative);
            }
        }
        
        return result || '0';
    }
    
    static parseExpression(expression) {
        const terms = [];
        let currentTerm = '';
        let sign = 1;
        
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            
            switch (char) {
                case '+':
                    if (currentTerm) {
                        terms.push(this.parseTerm(currentTerm, sign));
                        currentTerm = '';
                    }
                    sign = 1;
                    break;
                    
                case '-':
                    if (currentTerm) {
                        terms.push(this.parseTerm(currentTerm, sign));
                        currentTerm = '';
                    }
                    sign = -1;
                    break;
                    
                case ' ':
                    break;
                    
                default:
                    currentTerm += char;
                    break;
            }
        }
        
        if (currentTerm) {
            terms.push(this.parseTerm(currentTerm, sign));
        }
        
        return terms;
    }
    
    static parseTerm(termStr, sign) {
        // Если это просто число
        if (!isNaN(termStr)) {
            return {
                coefficient: sign * parseFloat(termStr),
                variable: '',
                power: 0
            };
        }
        
        // Если есть символ ^ (степень)
        if (termStr.includes('^')) {
            const [base, powerStr] = termStr.split('^');
            const power = parseInt(powerStr);
            
            // Если база содержит коэффициент
            if (base.includes('*')) {
                const [coeffStr, variable] = base.split('*');
                return {
                    coefficient: sign * parseFloat(coeffStr),
                    variable: variable,
                    power: power
                };
            } else {
                return {
                    coefficient: sign * 1,
                    variable: base,
                    power: power
                };
            }
        }
        
        // Если есть * но нет степени
        if (termStr.includes('*')) {
            const [coeffStr, variable] = termStr.split('*');
            return {
                coefficient: sign * parseFloat(coeffStr),
                variable: variable,
                power: 1
            };
        }
        
        // Если просто переменная
        return {
            coefficient: sign * 1,
            variable: termStr,
            power: 1
        };
    }
    
    static differentiateTerm(term, variable) {
        // Если терм не содержит нужную переменную
        if (term.variable !== variable) {
            return null;
        }
        
        // Производная константы
        if (term.power === 0) {
            return null;
        }
        
        const newCoefficient = term.coefficient * term.power;
        const newPower = term.power - 1;
        
        return {
            coefficient: newCoefficient,
            variable: term.variable,
            power: newPower
        };
    }
    
    static termToString(term) {
        if (term.power === 0) {
            return term.coefficient.toString();
        }
        
        let result = '';
        if (term.coefficient !== 1 && term.coefficient !== -1) {
            result += term.coefficient;
        }
        
        if (term.coefficient === -1) {
            result += '-';
        }
        
        if (term.coefficient !== 1 && term.coefficient !== -1) {
            result += '*';
        }
        
        result += term.variable;
        
        if (term.power > 1) {
            result += '^' + term.power;
        }
        
        return result;
    }
}

export {MiniMaple}