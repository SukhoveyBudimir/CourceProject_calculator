import {makeAutoObservable} from "mobx";

export default class HistoryStore {
    constructor() {
        this._history = [];
        makeAutoObservable(this)
    }

    setHistory(history) {
        this._history = history
    }

    clearHistory(){
        this._history = [];
    }

    get history() {
        return this._history;
    }
}