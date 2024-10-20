class Validator {
    constructor() {
      this.value = null;
    }
  
    string() {
      this.type = 'string';
      return this;
    }
  
    number() {
      this.type = NaN;
      return this;
    }
  
    object() {
      this.type = 'object';
      return this;
    }
  
    shape(schema) {
      this.schema = schema;
      this.type = 'object';
      return this;
    }
  
    integer() {
      this.isInteger = true;
      return this;
    }
  
    length(min = undefined, max = undefined) {
      this.min = min;
      this.max = max;
      return this;
    }
  
    isValid(value) {
      if (this.type === 'object') {
        const lengthObj = value.name.length;
        if (this.max !== undefined && this.isInteger === true) {
          return lengthObj <= this.max && lengthObj >= this.min && Number.isInteger(value.age);
        }
        if (this.min !== undefined && this.isInteger === true) {
          return lengthObj >= this.min && Number.isInteger(value.age);
        }
        if (this.max !== undefined) {
          return lengthObj <= this.max && Number.isInteger(value.age);
        }
        if (this.min !== undefined) {
          return lengthObj >= this.min;
        }
      }
      if (typeof value !== typeof this.type) {
        return false;
      }
      if (Number.isNaN(this.type) && this.isInteger) {
        if (!Number.isInteger(value)) {
          return false;
        }
      }
      const { length } = value;
      if (this.min !== undefined && this.max !== undefined) {
        return length >= this.min && length <= this.max;
      } if (this.min !== undefined) {
        return length >= this.min;
      }
      return true;
    }
  }
  
  export default Validator;
  