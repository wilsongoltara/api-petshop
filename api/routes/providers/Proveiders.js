const TableProvider = require('../providers/tableProvider');

class Proveiders {
    constructor({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categoria = categoria;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao;
    }

    async create() {
        this.validar();
        const result = await TableProvider.insert({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        });

        this.id = result.id;
        this.dataCriacao = result.dataCriacao;
        this.dataAtualizacao = result.dataAtualizacao;
        this.versao = result.versao;
    }

    async load() {
        const found = await TableProvider.getForId(this.id);
        this.empresa = found.empresa;
        this.email = found.email;
        this.categoria = found.categoria;
        this.dataCriacao = found.dataCriacao;
        this.dataAtualizacao = found.dataAtualizacao;
        this.versao = found.versao;
    }

    async update(id) {
        await TableProvider.getForId(this.id);
        const filds = [
            'empresa',
            'email',
            'categoria'
        ];
        const dataForUpdate = {};

        filds.forEach((fild) => {
            const value = this[fild];
            if(typeof(value) === 'string' && value.length > 0) {
                dataForUpdate[fild] = value;
            }
        });

        if(Object.keys(dataForUpdate).length === 0) {
            throw new Error('No update data found!');
        }

        await TableProvider.update(this.id, dataForUpdate);
    }

    remove() {
        return TableProvider.remove(this.id);
    }

    validar() {
        const filds = [
            'empresa',
            'email',
            'categoria'
        ];

        filds.forEach((fild) => {
            const value = this[fild];
            
            if(typeof(value) !== 'string' || value.length === 0) {
                throw new Error(`The fild '${fild}' is not valid`);
            }
        });
    }
}

module.exports =  Proveiders;