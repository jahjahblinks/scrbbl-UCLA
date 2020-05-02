class ROUND {
  constructor(word) {
    this.word = this.splitWord(this.simplifyWord(word));
    this.clock = null;
    this.lineHistory = [];
  }

  check(word) {
    let prompted = this.splitWord(this.simplifyWord(word));
    if (this.word.length != prompted.length) return false;

    let flag = true;

    for (let w of prompted) {
      if (!this.word.includes(w)) {
        flag = false;
      }
    }

    return flag;
  }

  isClose(word) {
    if (word.length < 3) {
      return false;
    }
    let prompted = this.splitWord(this.simplifyWord(word));

    let counter = 0;

    for (let p of prompted) {
      for (let w of this.word) {
        if (w.includes(p)) {
          counter++;
        }
      }
    }

    return counter >= this.word.length / 3;
  }

  simplifyWord(word) {
    return word
      .toLowerCase()
      .replace(/\s{2,}/g, " ")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  splitWord(word) {
    return word.split(" ").filter((el) => el.length);
  }

  addLine(line) {
    this.lineHistory.push(line);
  }

  clearLines() {
    this.lineHistory = [];
  }
}

module.exports = ROUND;
