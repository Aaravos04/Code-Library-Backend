import Snippet from "../models/Snippet.model.js";

const addSnippet = async (req, res) => {
  try {
    const { name, code } = req.body;
    if (!name || !code) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const snippet = new Snippet({ name, code });
    await snippet.save();

    res.status(201).json({
      success: true,
      message: "Snippet Created Successfully!",
      snippet: snippet,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal Server Error!",
    });
  }
};

const getAllSnippets = async (req, res) => {
  try {
    const data = await Snippet.find().lean();
    res.status(200).json({
      success: true,
      message: "Data Recieved Successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal Server Error!",
    });
  }
};

const updateSnippet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Snippet ID Required!",
      });
    }

    const updates = {};
    const { name, code } = req.body.updates;
    if (name !== undefined) updates.name = name;
    if (code !== undefined) updates.code = code;

    const snippet = await Snippet.findByIdAndUpdate(id, updates, {
      runValidators: true,
      new: true,
    });

    if (!snippet) {
      return res.status(400).json({
        success: false,
        message: "Invalid Snippet ID!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Snippet Updated Successfully!",
      snippet: snippet,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal Server Error!",
    });
  }
};

const deleteSnippet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Snippet ID Required!",
      });
    }

    const snippet = await Snippet.findByIdAndDelete(id);
    if (!snippet) {
      return res.status(400).json({
        success: false,
        message: "Invalid Snippet ID!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Snippet Deleted Successfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal Server Error!",
    });
  }
};

export { addSnippet, getAllSnippets, updateSnippet, deleteSnippet };
