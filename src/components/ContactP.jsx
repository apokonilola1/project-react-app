import styles from "../style";

const ContactP = () => (
  <section
    id="contact"
    className="m-0 p-0 bg-[#fff] pb-[100px] w-[100%] h-[100%]"
  >
    <h1 className="font-crimsonn text-center mt-[70px] mb-0 mx-auto py-[20px] px-0 text-[40px] uppercase tracking-[6px]">
      Contact Us
    </h1>

    {/* <!-- Left contact page -->  */}
    <div className="flex flex-row justify-between my-0 mx-auto p-[20px] relative max-w-[840px]">
      <form
        id="contact-form"
        className="mx-auto max-w-[400px] sm:max-w-[90%] w-[90%]"
        role="form"
      >
        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="text"
              className="w-full tracking-[1px] text-[#fff] bg-[#D9D9D9] border-[1px] border-[black] mb-[10px] rounded-[5px]"
              id="name"
              placeholder="NAME *"
              name="name"
              value=""
              required
            />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="email"
              className="w-full tracking-[1px] text-[#fff] bg-[#D9D9D9] border-[1px] border-[black] mb-[10px] rounded-[5px]"
              id="email"
              placeholder="EMAIL *"
              name="email"
              value=""
              required
            />
          </div>
        </div>

        <textarea
          className="w-full tracking-[1px] text-[#fff] bg-[#D9D9D9] border-[1px] border-[black] rounded-[5px]"
          rows="10"
          placeholder="MESSAGE"
          name="message"
          required
        ></textarea>

        <button
          className="w-full mt-[10px] h-[34px] overflow-hidden ease-in-out transition-all bg-slate-400 rounded-[5px]"
          id="submit"
          type="submit"
          value="SEND"
        >
          <span className="block text-[12px] tracking-[2px]">SEND</span>
        </button>
      </form>
    </div>
  </section>
);

export default ContactP;
