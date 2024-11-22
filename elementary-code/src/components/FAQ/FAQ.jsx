import Paragraph from '../UI/Paragraph/Paragraph'
import Title from '../UI/Title/Title'
import { v4 as uuid } from 'uuid'
import './faq.css'

const questions = [
    {
        id: crypto.randomUUID(),
        question: 'Como o meu dinheiro será utilizado?',
        answer: 'O seu dinheiro será empregado para arcar com as despesas operacionais da Elementary Code. Isso engloba o pagamento dos servidores responsáveis pela hospedagem do site, o nome de domínio e quaisquer outras despesas ligadas à realização do projeto. O seu dinheiro não será destinado ao pagamento dos mantenedores.'
    },
    {
        id: crypto.randomUUID(),
        question: 'Como eu posso doar?',
        answer: 'Você pode contribuir através do Open Collective, estabelecendo uma doação recorrente ou efetuando um pagamento único.'
    },
    {
        id: crypto.randomUUID(),
        question: 'Que formas de pagamento posso usar?',
        answer: 'Normalmente, você pode efetuar o pagamento através de cartão de crédito através da nossa página Coletiva Aberta. Eles também disponibilizam transferência bancária, Paypal ou outros métodos em complemento ou em substituição aos pagamentos com cartão de crédito. Ao percorrer o fluxo de contribuição, você verá todos os métodos de pagamento disponíveis.'
    },
    {
        id: crypto.randomUUID(),
        question: 'E se receberem mais doações que o necessário?',
        answer: 'Qualquer dinheiro adicional que obtivermos será empregado para aprimorar a Elementary Code, ou será guardado para necessidades futuras. Isso engloba o pagamento por novas funcionalidades, a aquisição de novos servidores e o pagamento por quaisquer outros custos relacionados à execução do projeto'
    },
    {
        id: crypto.randomUUID(),
        question: 'Não posso doar agora. Existe outro jeito de contribuir?',
        answer: 'Você pode nos auxiliar contribuindo para nossos projetos de código aberto. Você também pode nos auxiliar divulgando a Elementary School. Diga aos seus amigos, família e colegas de trabalho sobre nós. Divulgue nosso conteúdo nas redes sociais. Quanto mais pessoas nos conhecem, mais pessoas podemos auxiliar.'
    }
]

function FAQ() {
    return (
        <div className="faq p-5 d-flex flex-column gap-5">
            <Title
                text="Perguntas frequentes"
                alignment="center"
            />
            <div className="questions d-flex flex-column gap-3">
                {questions.map((question) => (
                    <div key={question.id} className="question-box">
                        <Title
                            text={question.question}
                            alignment="left"
                            fontSize={'1.2'}
                        />
                        <Paragraph
                            text={question.answer}
                            alignment="left"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ