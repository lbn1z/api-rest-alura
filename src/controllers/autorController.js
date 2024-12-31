import { autor } from "../models/Autor.js";

class AutorController {
// listar autor
    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
       } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
       }
    };
// buscar autor por id
    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
       } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição da busca do autor`});
       }
    };
// cadastrar autor
    static async cadastrarAutor (req, res)  {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar autor`});
        }
    }
// atualizar autor
    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
       } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualizaçao do autor`});
       }
    };
// deletar autor
    static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluido com sucesso" });
       } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha em excluir o autor`});
       }
    };
};

export default AutorController;

