/**
 * task：
 * 三个状态
 *  状态不可逆
 * 链式调用then
 *  then会进入微任务队列
 *  then中如果先其它异步任务
 * catch捕获异常
 * finally最终执行
 * [Prototype]原型链，Promise
 */
class MyPromise {
  status = 'pending';
  value = null;
  callbacks = [];

  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECT = 'reject';

  constructor(executor) {
    try {
      executor(this._resolve, this._reject);
    } catch (error) {
      this.reject(error);
    }
  };

  _onChange = (value, status) => {
    if (this.status === MyPromise.PENDING) {
      /**
       * 知识点：static 方法中的this是当前类，而不是实例
       */
      this.status = status;
      this.value = value;
      setTimeout(() => {
        this.callbacks.forEach(({
          onFulfilled,
          onRejected
        })=> {
          try {
            if (status === MyPromise.FULFILLED) {
              onFulfilled(value);
            } else {
              onRejected(value);
            }
          } catch (error) {
            onRejected(error);
          }
        })
      })
    }
  }

  _resolve = (value) => {
    this._onChange(value,MyPromise.FULFILLED);
  }

  _reject = (reason) => {
    this._onChange(reason,MyPromise.REJECT);
  }

  resolve = (value) => {
    this._resolve(value);
  }

  reject = (value) => {
    this._reject(value);
  }

  then = (onFulfilled = () => this.value, onRejected = () => this.value) => {
    return new MyPromise((resolve, reject) => {
      switch (this.status) {
        case MyPromise.PENDING:
          this.callbacks.push({
            onFulfilled,
            onRejected
          });
          break;
        case MyPromise.FULFILLED:
          setTimeout(() => {
            const result = onFulfilled(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              return resolve(result);
            }
          })
          break;
        case MyPromise.REJECT:
          setTimeout(() => {
            const result = onRejected(this.value);
            return reject(result);
          })
          break;
        default:
          setTimeout(() => {
            const result = onRejected(this.value);
            return reject(result);
          })
          break;
      }
    })
  }

  catch = (callback) => {
    if (this.status === MyPromise.REJECT) {
      callback(this.value);
    }
  }
}