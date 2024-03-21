export default function MovesModal({ showModal, setShowModal, move }: any) {



    return (
        <div className={`${showModal ? "relative" : "hidden"} z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-neutral-300 bg-opacity-40 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative rounded-lg bg-neutral-900 flex">
                        <div className="w-full flex justify-end">
                            <button type="button" className="w-fit rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500" onClick={() => setShowModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}