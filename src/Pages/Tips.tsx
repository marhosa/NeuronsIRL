import NavBar2 from "../components/NavBar2";

const Tips = () => {
  return (
    <>
      <NavBar2 />

      <div className="pt-40 w-[90vw] min-h-[100vh] text-ellipsis mb-10">
        <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-20 mt-10">
          The Drawing Canvas
        </p>
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-30 mt-2">
          The canvas is a 28×28 grid with guide lines to help you draw digits correctly:
        </p>
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-40 mt-2">
          - Horizontal lines show the ideal top and bottom boundaries.
        </p>
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-40 mt-2">
          - Vertical lines mark the recommended width, your digit should fit between them with a bit of space.
        </p>
        
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-30 mt-2">
        These are nearly required to be followed since the trained image data is usually centered, and the canvas is directly the input layer itself with no auto-centering feature added.
        </p>

        <p className="text-amber-50 font-bold text-xl sm:text-2xl md:text-3xl ml-4 sm:ml-20 mt-10">
          Examples
        </p>

        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-30 mt-2">
          The images below show examples of how each digit should be drawn for a better prediction result, based on experiments that analyzed output behavior.
        </p>
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-40 mt-2">
          - Red lines = suggested stroke direction/flow.
        </p>
        <p className="text-amber-50 font-normal text-base sm:text-lg md:text-xl ml-6 sm:ml-40 mt-2">
          - Yellow Drawing - Example of the final drawing.
        </p>

        <div>
          {[
            {
              src: "images/1.jpg",
              text: "Stroke flow follows the number 1 shape with a base and line on the top, but it can also just be a vertical line drawn at the center.",
            },
            {
              src: "images/2.jpg",
              text: 'It follows a "Z" shaped flow, where a diagonal from the upper-right to the lower-left connects the two bases.',
            },
            {
              src: "images/3.jpg",
              text: 'Stroke flow looks like a flipped capital letter "E"',
            },
            {
              src: "images/4.jpg",
              text: "The horizontal line at the middle should overflow the vertical line that is placed a bit to the right part of the canvas.",
            },
            {
              src: "images/5.jpg",
              text: 'It follows a capital "S" shaped line with no curves at the top portion.',
            },
            {
              src: "images/6.jpg",
              text: "A capital \"G\" shaped flow where the top portion of the digit does not curve horizontally but preferably points upwards.",
            },
            {
              src: "images/7.jpg",
              text: "The flow contains a horizontal line at the top and a diagonal line from the upper-right corner to the bottom-center of the canvas.",
            },
            {
              src: "images/8.jpg",
              text: 'The flow follows an hour glass shape, where the two diagonal lines will form an "X" at the center of the canvas.',
            },
            {
              src: "images/9.jpg",
              text: "Contains a triangular/circular shape at the upper part of the canvas and a vertical line at the right side.",
            },
          ].map((item, index) => (
            <div key={index} className="ml-4 sm:ml-30 mt-10 flex flex-col sm:flex-row items-center gap-4">
              <img src={item.src} className="w-[150px] sm:w-[200px]" alt={`Digit ${index + 1}`} />
              <div className="w-full text-ellipsis">
                <p className="text-amber-50 font-normal text-sm sm:text-base md:text-lg ml-2 sm:ml-10">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tips;
