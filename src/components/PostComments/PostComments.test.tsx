import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.'; 

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar o comentário Olá, teste!', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('test-comentar'), {
            target: {
                value: 'Olá, teste!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Olá, teste!')).toBeInTheDocument()
    })

    it('Deve renderizar o comentário Testando segundo comentario', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('test-comentar'), {
            target: {
                value: 'Testando segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Testando segundo comentário')).toBeInTheDocument()
    })
});