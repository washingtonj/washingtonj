export default function Card () {
  return (
    <div className="w-full h-32 rounded p-4 text-theme-tertiary bg-theme-secundary bg-opacity-25">
      <div className="flex items-center">
        <h2 className="text-lg font-extrabold uppercase">Rest Countries</h2>
        <span className="ml-2">
          <p className="text-xs font-bold rounded py-0.5 px-1 bg-blue-700">TS</p>
        </span>
      </div>
      <div className="text-sm mt-2">
        <p>
          Desenvolvido para o FrontEnd Mentor com foco no estudo do
          Typescript com Context API.
        </p>
      </div>
    </div>
  )
}
