// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function (): number {
    return this.length;
  };

  Array.prototype.insert = function (index: number, element: any) {
    if (typeof index !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    if (index > this.length) {
      this.push(element);
      return this;
    }
    if (index < 0) {
      this.unshift(element);
      return this;
    }
    this.splice(index, 0, element);
    return this;
  };

  Array.prototype.remove = function (element: any) {
    const index: number = this.indexOf(element);
    if (index === -1) {
      return this;
    } else {
      this.splice(index, 1);
      return this;
    }
  };
};

export default patchArrays;
