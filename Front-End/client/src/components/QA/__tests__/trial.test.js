
import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import {render, screen, cleanup, waitFor, fireEvent} from '@testing-library/react';
import axios from 'axios';
import QuestionList from '../QuestionList.jsx'
import IndividualQuestion from '../IndividualQuestion.jsx';
import AddQuestion from '../AddQuestion.jsx'
import AddAnswer from '../AddAnswer.jsx'
import AddAnswerModal from '../AddAnswerModal.jsx'
import Modal from '../AddQuestionModal.jsx'
import {ModalForm} from '../assets/styles.js'
import {format, parseISO} from 'date-fns'
import QA from '../QA.jsx'

jest.mock('axios')

const data2 = {
    "product_id": "37311",
    "results": [
        {
            "question_id": 642829,
            "question_body": "When is this available?",
            "question_date": "2022-08-29T00:00:00.000Z",
            "asker_name": "John Doe",
            "question_helpfulness": 75,
            "reported": false,
            "answers": {
                "5988956": {
                    "id": 5988956,
                    "body": "Hopefully by the end of October.",
                    "date": "2022-10-24T00:00:00.000Z",
                    "answerer_name": "whatever",
                    "helpfulness": 5,
                    "photos": [
                        "http://res.cloudinary.com/dvpmx7xsz/image/upload/v1666582464/q44nal1g3besazkqozjc.webp"
                    ]
                },
                "5988963": {
                    "id": 5988963,
                    "body": "blue steel",
                    "date": "2022-10-24T00:00:00.000Z",
                    "answerer_name": "blue steel",
                    "helpfulness": 1,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666626399/bluecamoone_yy8ovm.jpg"
                    ]
                },
                "5988985": {
                    "id": 5988985,
                    "body": "console.lost",
                    "date": "2022-10-25T00:00:00.000Z",
                    "answerer_name": "console.lost",
                    "helpfulness": 3,
                    "photos": []
                },
                "5988996": {
                    "id": 5988996,
                    "body": "We're doing it live",
                    "date": "2022-10-25T00:00:00.000Z",
                    "answerer_name": "DoItLive",
                    "helpfulness": 0,
                    "photos": []
                },
                "5989002": {
                    "id": 5989002,
                    "body": "WeDoinItWell?",
                    "date": "2022-10-25T00:00:00.000Z",
                    "answerer_name": "WeDoinItWell",
                    "helpfulness": 0,
                    "photos": []
                },
                "5989019": {
                    "id": 5989019,
                    "body": "dates off? also how questions going through?",
                    "date": "2022-10-25T00:00:00.000Z",
                    "answerer_name": "and e",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 643820,
            "question_body": "What are some other camo products you like?",
            "question_date": "2022-10-26T00:00:00.000Z",
            "asker_name": "and e",
            "question_helpfulness": 2,
            "reported": false,
            "answers": {
                "5989072": {
                    "id": 5989072,
                    "body": "Speed feed filler for prezzie",
                    "date": "2022-10-26T00:00:00.000Z",
                    "answerer_name": "blue steel",
                    "helpfulness": 0,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666550445/bluecamoone_u79yb7.jpg"
                    ]
                },
                "5989073": {
                    "id": 5989073,
                    "body": "Speed feed filler for prezzie",
                    "date": "2022-10-26T00:00:00.000Z",
                    "answerer_name": "blue steel",
                    "helpfulness": 0,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666550445/bluecamoone_u79yb7.jpg"
                    ]
                },
                "5989074": {
                    "id": 5989074,
                    "body": "actual camo onesie",
                    "date": "2022-10-26T00:00:00.000Z",
                    "answerer_name": "asdf",
                    "helpfulness": 0,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666744793/camoone_gay7cl.jpg"
                    ]
                },
                "5989075": {
                    "id": 5989075,
                    "body": "another blue one",
                    "date": "2022-10-26T00:00:00.000Z",
                    "answerer_name": "jkl;",
                    "helpfulness": 0,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666744833/coolcamoone_y9reue.webp"
                    ]
                }
            }
        },
        {
            "question_id": 640827,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 1,
            "reported": false,
            "answers": {
                "5985803": {
                    "id": 5985803,
                    "body": "test",
                    "date": "2022-05-31T00:00:00.000Z",
                    "answerer_name": "test1",
                    "helpfulness": 0,
                    "photos": []
                },
                "5989070": {
                    "id": 5989070,
                    "body": "camo kitty",
                    "date": "2022-10-26T00:00:00.000Z",
                    "answerer_name": "and e",
                    "helpfulness": 2,
                    "photos": [
                        "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666744414/bettertinycat_alwhku.jpg"
                    ]
                }
            }
        },
        {
            "question_id": 641514,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641513,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641512,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641511,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641510,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641509,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641508,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641507,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641506,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641505,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641504,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641503,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641502,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 641496,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-06-01T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640837,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640836,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640834,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640831,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640829,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640828,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 640826,
            "question_body": "How comfy are these shoes?",
            "question_date": "2022-05-20T00:00:00.000Z",
            "asker_name": "Sam",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        }
    ]
}




describe('Testing Question Render', function () {

    beforeAll(() => {

        axios.get.mockResolvedValue({ data: data2 });
      });
      afterEach(() => {

        cleanup()
      });

    it('Should render 4 questions on page load', async () => {
        axios.get.mockResolvedValue({ data: data2 });

        render(<QuestionList productId={'37311'}></QuestionList>)

        const questionInstances = await waitFor(() => screen.findAllByTestId('IQ'))
	  expect(questionInstances).toHaveLength(4)
    });
})







describe('Testing Question Modal Render', () => {
    const onClickMock = jest.fn()
    beforeAll(() => {

        axios.get.mockResolvedValue({ data: data2 });
        });
        afterEach(() => {

        cleanup()
        });

    it('Should trigger modal', async () => {

        axios.get.mockResolvedValue({ data: data2 });
        await render(<QuestionList productId={'37311'}></QuestionList>);
        const {container} = render(<AddQuestion onClick={onClickMock()}/>)

        fireEvent.click(container, 'Add a question')
        await render(<Modal/>)
        expect(onClickMock).toHaveBeenCalledTimes(1)
    });
});

describe('Testing Answer Modal Render', () => {
    const onClickMock = jest.fn()
    beforeAll(() => {

        axios.get.mockResolvedValue({ data: data2 });
        });
        afterEach(() => {

        cleanup()
        });

    it('Should trigger modal', async () => {

        axios.get.mockResolvedValue({ data: data2 });
        await render(<QuestionList productId={'37311'}></QuestionList>);
        const {container} = render(<AddAnswer onClick={onClickMock()}/>)

        fireEvent.click(container, 'Add Answer')
        await render(<AddAnswerModal/>)
        const { getByText } = render(<ModalForm onSubmit={onClickMock} />);

        expect(onClickMock).toHaveBeenCalledTimes(1)
    });
});

describe('Testing Answer Modal Render', () => {
    const onClickMock = jest.fn()
    beforeAll(() => {

        axios.get.mockResolvedValue({ data: data2 });
        });
        afterEach(() => {

        cleanup()
        });

    it('Should trigger modal', async () => {

        axios.get.mockResolvedValue({ data: data2 });
        await render(<QA productId={'37311'}></QA>);
        await render(<QuestionList productId={'37311'} />)



        expect(screen.queryByTestId('QL')).toBeInTheDocument()
    });
});




