interface IChangeInputData {
    data: string;
    setData: (data: string) => void;
    handleSubmit: () => void;
    isPending: boolean
}

const ChangeInputData = ({data, setData, handleSubmit, isPending}: IChangeInputData) => {
    return (
        <div className='flex space-x-[10px] mt-[10px]'>
            <input onChange={(e) => setData(e.target.value)} value={data} className='bg-gray-col focus:outline-none py-[10px] px-[15px] rounded-full' type="text"/>
            <button onClick={handleSubmit} className='bg-green-col rounded-full py-[10px] px-[15px] text-[14px] text-white-col font-semibold'>
                {isPending ? 'Загрузка...' : 'Зберегти'}
            </button>
        </div>
    );
};

export default ChangeInputData;